
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initMetaPixel } from './metaPixel';

// Inicializar pixel ANTES de que React monte cualquier componente
// Así todos los trackMetaEvent() de useEffect encuentran window.fbq listo
initMetaPixel();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
