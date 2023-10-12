import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import WebviewerProvider from './context/webviewer-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebviewerProvider>
      <App />
    </WebviewerProvider>
  </React.StrictMode>,
);
