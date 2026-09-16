import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { injectStyles } from './styles/index.js';
import { userAgentClasses } from './userAgent.js';

injectStyles();
document.body.classList.add(...userAgentClasses());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
