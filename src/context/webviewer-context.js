import { createContext } from 'react';

export const WebviewerContext = createContext({
  instance: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInstanceContext: () => {},
});
