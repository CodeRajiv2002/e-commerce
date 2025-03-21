import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>,
);

