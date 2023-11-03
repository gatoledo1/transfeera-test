import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./style/global.scss"
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
