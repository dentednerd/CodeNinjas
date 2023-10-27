import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './fonts.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
