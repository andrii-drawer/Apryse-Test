import { useMemo, useState } from 'react';

import { WebviewerContext } from './webviewer-context';

const WebviewerProvider = ({ children }) => {
  const [instance, setInstanceContext] = useState(null);
  const value = useMemo(() => ({ instance, setInstanceContext }), [instance]);

  return <WebviewerContext.Provider value={value}>{children}</WebviewerContext.Provider>;
};

export default WebviewerProvider;
