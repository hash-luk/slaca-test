import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './Global-Styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

reportWebVitals();
