import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { styled, createGlobalStyle } from 'styled-components';
import { ListProvider } from './contexts/ListProvider';

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #D0E8FD;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ListProvider>
      <GlobalStyles />
      <App />
    </ListProvider>
  </>,
);
