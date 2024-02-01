import React from 'react';
import ReactDOM from 'react-dom/client';
import './modern-normalize.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from './contexts/ThemeModeContext.jsx';
import { InternetConnectionProvider } from './contexts/InternetConnectionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InternetConnectionProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </InternetConnectionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);