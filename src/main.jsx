import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import CreateBrowserRouter from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <CreateBrowserRouter />
  </React.StrictMode>
);
