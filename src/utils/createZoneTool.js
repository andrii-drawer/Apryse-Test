export const createZoneTool = (instanceCore) => {
  const { Annotations, Tools, documentViewer, annotationManager } = instanceCore;

  const ZoneAnnotation = Annotations.CustomAnnotation.createFromClass(
    'PREFERRED_ZONE',
    Annotations.RectangleAnnotation,
  );

  annotationManager.registerAnnotationType(ZoneAnnotation.prototype.elementName, ZoneAnnotation);

  Annotations.setCustomSerializeHandler(ZoneAnnotation, (element, pageMatrix, options) => {
    const annot = options.annotation;
    // console.log(element);
    // options.originalSerialize(element, pageMatrix);
    element.setAttribute('myAttr', '1');

    return element;
  });

  Annotations.setCustomDeserializeHandler(ZoneAnnotation, (element, pageMatrix, options) => {
    const annot = options.annotation;
    options.originalDeserialize(element, pageMatrix);
    annot.myProperty = element.getAttribute('myAttr');
  });

  Annotations.setCustomDrawHandler(
    ZoneAnnotation,
    function drawHandler(ctx, pageMatrix, rotation, options) {
      options.annotation.elementType = 'PREFERRED_ZONE';
      options.annotation.disableRotationControl();
      options.originalDraw(ctx, pageMatrix, rotation);

      let fontSize;

      if (this.Height > this.Width) {
        fontSize = this.Width * 0.1;
      } else {
        fontSize = this.Height * 0.1;
      }

      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `100 ${fontSize || 0}px sans-serif`;
      const X = this.X + this.Width / 2;
      const Y = this.Y + this.Height / 2;
      ctx.fillText('PREFERRED_ZONE', X, Y);
      ctx.restore();
    },
  );

  const ZoneCreateTool = new Tools.GenericAnnotationCreateTool(documentViewer, ZoneAnnotation);

  const defaults = {
    StrokeColor: new Annotations.Color(0, 155, 119, 1),
    FillColor: new Annotations.Color(0, 155, 119, 0.7),
    Opacity: 1,
    StrokeThickness: 1,
  };

  ZoneCreateTool.mouseDoubleClick = function dbClick() {
    const annotation = new ZoneAnnotation({
      ...defaults,
      Width: 300,
      Height: 100,
      X: this.pageCoordinates[0].x,
      Y: this.pageCoordinates[0].y,
      ToolName: 'AnnotationCreatePreferredZone',
      elementType: 'PREFERRED_ZONE',
    });

    annotation.disableRotationControl();

    this.getDocumentViewer().getAnnotationManager().addAnnotation(annotation);
    this.getDocumentViewer().getAnnotationManager().redrawAnnotation(annotation);
  };

  ZoneCreateTool.defaults = defaults;

  return ZoneCreateTool;
};
