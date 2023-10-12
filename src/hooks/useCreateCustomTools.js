import { useCallback } from 'react';

import { addZoneToolToPanel } from '../utils/addZoneToolToPanel';
import { createZoneTool } from '../utils/createZoneTool';

export const useCreateCustomTools = () => {
  return useCallback((instance) => {
    if (instance) {
      /* Start of custom tool creation */
      const PreferredZoneTool = createZoneTool(instance.Core);

      addZoneToolToPanel({
        tool: PreferredZoneTool,
        UI: instance.UI,
      });
      /* End of custom tool creation */
    }
  }, []);
};
