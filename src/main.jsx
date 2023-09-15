import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </BrowserRouter>
);
