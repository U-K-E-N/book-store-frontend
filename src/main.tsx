import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { LanguageProvider } from './context/LanguageContext';

const Root = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);