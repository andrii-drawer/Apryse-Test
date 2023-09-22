import { createContext } from 'react';


export const WebviewerContext = createContext({
  instance: null,
  setInstanceContext: () => {},
});
