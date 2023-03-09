import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import { BrowserRouter } from 'react-router-dom'; // Use HashRouter in github instead of  BrowserRouter
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
);