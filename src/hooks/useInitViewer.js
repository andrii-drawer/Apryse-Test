import { useCallback } from 'react';

import { useCreateCustomTools } from './useCreateCustomTools';

export const useInitViewer = () => {
  const handleCreateCustomTools = useCreateCustomTools();

  const handler = useCallback(
    (instance) => {

      handleCreateCustomTools(instance);;
    },
    [
      handleCreateCustomTools,

    ],
  );

  return handler;
};
