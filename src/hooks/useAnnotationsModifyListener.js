import { useCallback, useContext, useEffect } from 'react';

import { WebviewerContext } from '../context/webviewer-context';

export const useAnnotationModifyListener = () => {
  const { instance } = useContext(WebviewerContext);
  const handler = useCallback(
    (annotations, action, info) => {
      if (instance && action === 'modify') {
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
