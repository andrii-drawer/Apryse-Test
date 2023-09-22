import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef, useContext } from "react";
import { useAnnotationAddListener} from './hooks/useAnnotationAddListener';
import { useAnnotationDeleteListener} from './hooks/useAnnotationDeleteListener';
import { useAnnotationModifyListener} from './hooks/useAnnotationsModifyListener';
import { useInitViewer } from "./hooks/useInitViewer";
import { WebviewerContext} from './context/webviewer-context'

function App() {
  const viewer = useRef(null);
  const { setInstanceContext, instance: webViewerInstance } = useContext(WebviewerContext);
  const initViewer = useInitViewer();

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer',
        initialDoc:
                "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        enableMeasurement: true,
      },
      viewer.current,
    ).then((webviewerInstance) => {
      setInstanceContext(webviewerInstance);
      initViewer(webviewerInstance);

      const {
        Core: { documentViewer },
      } = webviewerInstance;

      const deltaZoomIn = documentViewer.getZoomLevel() + 0.25;
      const maxZoomLevel = webviewerInstance.UI.getMaxZoomLevel();

      documentViewer.zoomTo(deltaZoomIn < maxZoomLevel ? deltaZoomIn : maxZoomLevel);
    });
  }, [initViewer, setInstanceContext]);

  useAnnotationAddListener();
  useAnnotationModifyListener();
  useAnnotationDeleteListener();

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