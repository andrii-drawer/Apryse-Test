import { useCallback, useContext, useEffect } from 'react';

import { WebviewerContext } from '../context/webviewer-context';

export const useScrollOnMouseWheelListener = () => {
  const { instance } = useContext(WebviewerContext);

  const handler = useCallback(() => {
    if (instance) {
      const { documentViewer, DisplayMode } = instance.Core;
      // const docDimensions = documentViewer.getDocument().getPageInfo(1);
      const scrollElement = instance.Core.documentViewer.getScrollViewElement();
      scrollElement.addEventListener('wheel', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e.offsetX);
        console.log(e.offsetY);

        if (e.deltaY < 0) {
          documentViewer.zoomToMouse(documentViewer.getZoomLevel() * 1.1, e.offsetX, e.offsetY);
          // documentViewer.zoomTo(documentViewer.getZoomLevel() * 1.01);
        } else {
          documentViewer.zoomToMouse(documentViewer.getZoomLevel() * 0.9, e.offsetX, e.offsetY);
          // documentViewer.zoomTo(documentViewer.getZoomLevel() * 0.99);
        }
      });
    }
  }, [instance]);

  useEffect(() => {
    if (instance) {
      instance.Core.documentViewer.addEventListener('pageComplete', handler);
    }

    return () => {
      if (instance) {
        instance.Core.documentViewer.removeEventListener('pageComplete', handler);
      }
    };
  }, [handler, instance]);
};
