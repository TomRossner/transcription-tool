import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TranscriptProvider from './context/TranscriptContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <TranscriptProvider>
      <App />
    </TranscriptProvider>
  </React.StrictMode>
);
