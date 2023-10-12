import { useCallback, useContext, useEffect } from 'react';

import { WebviewerContext } from '../context/webviewer-context';

export const useScrollOnMouseListener = () => {
  const { instance } = useContext(WebviewerContext);
  let throttleTime;

  const handler = useCallback(() => {
    if (instance) {
      // const getMouseLocation = (e) => {
      //   const scrollElement =
      //     instance.Core.documentViewer.getScrollViewElement();
      //   const scrollLeft = scrollElement.scrollLeft || 0;
      //   const scrollTop = scrollElement.scrollTop || 0;

      //   return {
      //     x: e.pageX + scrollLeft,
      //     y: e.pageY + scrollTop,
      //   };
      // };

      console.log();
      const scrollElement = instance.Core.documentViewer.getScrollViewElement();
      // console.log('lol', scrollElement)
      scrollElement.addEventListener('wheel', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
      });
      // instance.Core.documentViewer.zoomToMouse(2, 0, 0)
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
