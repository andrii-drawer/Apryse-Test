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
    // @ts-ignore
    element.setAttribute('myAttr', '1');

    return element;
  });

  Annotations.setCustomDeserializeHandler(ZoneAnnotation, (element, pageMatrix, options) => {
    const annot = options.annotation;
    options.originalDeserialize(element, pageMatrix);
    // @ts-ignore
    annot.myProperty = element.getAttribute('myAttr');
  });

  Annotations.setCustomDrawHandler(
    ZoneAnnotation,
    function drawHandler(ctx, pageMatrix, rotation, options) {
      // @ts-ignore
      options.annotation.elementType = 'PREFERRED_ZONE';
      options.annotation.disableRotationControl();
      options.originalDraw(ctx, pageMatrix, rotation);

      let fontSize;

      // @ts-ignore
      if (this.Height > this.Width) {
        // @ts-ignore
        fontSize = this.Width * 0.1;
      } else {
        // @ts-ignore
        fontSize = this.Height * 0.1;
      }

      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `100 ${fontSize || 0}px sans-serif`;
      // @ts-ignore
      const X = this.X + this.Width / 2;
      // @ts-ignore
      const Y = this.Y + this.Height / 2;
      ctx.fillText('PREFERRED_ZONE', X, Y);
      ctx.restore();
    },
  );

  const ZoneCreateTool = new Tools.GenericAnnotationCreateTool(documentViewer, ZoneAnnotation);

  const defaults = {
    StrokeColor:

       new Annotations.Color(0, 155, 119, 1),
    FillColor:

         new Annotations.Color(0, 155, 119, 0.7),
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
