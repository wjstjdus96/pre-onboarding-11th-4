import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { styled, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #D0E8FD;
    padding: 40px;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
