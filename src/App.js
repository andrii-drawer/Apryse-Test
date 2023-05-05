import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, Tools, Annotations } = instance.Core;
      const { registerTool, setHeaderItems } = instance.UI;

      /* Start of custom tool creation */
      const HomerunBoxAnnotation = Annotations.CustomAnnotation.createFromClass(
        "Homerun Box",
        Annotations.RectangleAnnotation
      );

      const origDraw = HomerunBoxAnnotation.prototype.draw;
      HomerunBoxAnnotation.prototype.draw = function drawCanvas(ctx) {
        origDraw.apply(this, arguments);
        ctx.fillStyle = "rgba(153, 153, 153, 1)";
        ctx.font = `${this.Width / 5}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("HR", this.X + this.Width / 2, this.Y + this.Height / 2);
      };

      const homerunBoxToolName = "AnnotationCreateHomerunBox";

      const HomerunBoxCreateTool = new Tools.GenericAnnotationCreateTool(
        documentViewer,
        HomerunBoxAnnotation
      );

      HomerunBoxCreateTool.defaults = {
        StrokeColor: new Annotations.Color(153, 153, 153, 1),
        FillColor: new Annotations.Color(10, 52, 143, 1),
        Opacity: 1,
        StrokeThickness: 1,
      };

      registerTool({
        toolName: homerunBoxToolName,
        toolObject: HomerunBoxCreateTool,
        tooltip: "Homerun Box",
        buttonName: "homerunBoxButton",
        buttonImage:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">' +
          '<path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/>' +
          '<path fill="none" d="M0 0h24v24H0V0z"/>' +
          "</svg>",
      });

      setHeaderItems((header) => {
        header
          .getHeader("toolbarGroup-Shapes")
          .get("freeHandToolGroupButton")
          .insertBefore({
            type: "toolButton",
            toolName: homerunBoxToolName,
          });
      });
      /* End of custom tool creation */
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "gray" }}>
      <div
        className="webviewer"
        ref={viewer}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          borderRadius: "0.25rem",
        }}
      />
    </div>
  );
}

export default App;
