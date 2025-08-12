import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import CreateBrowserRouter from './styles/globalStyle';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Esta é uma boa solução para um aplicativo inteiro, pois aplica a filtragem globalmente.
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <CreateBrowserRouter />
    </React.StrictMode>
  </StyleSheetManager>
);
