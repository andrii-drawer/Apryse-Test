import WebViewer from '@pdftron/webviewer';
import { useContext, useEffect, useRef } from 'react';

import file from './assets/file.pdf';
import { WebviewerContext } from './context/webviewer-context';
import { useAnnotationAddListener } from './hooks/useAnnotationAddListener';
import { useAnnotationDeleteListener } from './hooks/useAnnotationDeleteListener';
import { useAnnotationModifyListener } from './hooks/useAnnotationsModifyListener';
import { useInitViewer } from './hooks/useInitViewer';
import { useScrollOnMouseListener } from './hooks/useScrollOnMouseWheelListener';

function App() {
  const viewer = useRef(null);
  const { setInstanceContext, instance: webViewerInstance } = useContext(WebviewerContext);
  const initViewer = useInitViewer();

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer',
        initialDoc: file,
        enableMeasurement: true,
      },
      viewer.current,
    ).then((webviewerInstance) => {
      setInstanceContext(webviewerInstance);
      initViewer(webViewerInstance);
      // const deltaZoomIn = documentViewer.getZoomLevel() + 0.25;
      // const maxZoomLevel = webviewerInstance.UI.getMaxZoomLevel();

      // documentViewer.zoomTo(deltaZoomIn < maxZoomLevel ? deltaZoomIn : maxZoomLevel);
    });
  }, [initViewer, setInstanceContext, webViewerInstance]);

  useAnnotationAddListener();
  useAnnotationModifyListener();
  useAnnotationDeleteListener();
  useScrollOnMouseListener();

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'gray' }}>
      <div
        className='webviewer'
        ref={viewer}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          borderRadius: '0.25rem',
        }}
      />
    </div>
  );
}

export default App;
