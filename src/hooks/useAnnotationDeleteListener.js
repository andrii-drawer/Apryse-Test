import { useCallback, useContext, useEffect } from 'react';

import { WebviewerContext } from '../context/webviewer-context';

export const useAnnotationDeleteListener = () => {
  const { instance } = useContext(WebviewerContext);

  const handler = useCallback(
    (annotations, action) => {
      if (instance && action === 'delete') {
        console.log(annotations);
      }
    },
    [instance],
  );

  useEffect(() => {
    if (instance) {
      instance.Core.annotationManager.addEventListener('annotationChanged', handler);
    }

    return () => {
      if (instance) {
        instance.Core.annotationManager.removeEventListener('annotationChanged', handler);
      }
    };
  }, [handler, instance]);
};
