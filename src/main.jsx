import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'
import ProductProvider from './context/ProductContext.jsx';
import BasketProvider from './context/BasketContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasketProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BasketProvider>
    <ToastContainer/>
  </StrictMode>
);

