import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@ionic/react/css/core.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to enable service worker for PWA, uncomment the following lines:
// serviceWorkerRegistration.register();
// reportWebVitals();
