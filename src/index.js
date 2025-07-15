// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 필요하다면 기본 index.css
import App from './App'; // App 컴포넌트를 불러와요.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트를 렌더링해요. */}
  </React.StrictMode>
);

reportWebVitals();