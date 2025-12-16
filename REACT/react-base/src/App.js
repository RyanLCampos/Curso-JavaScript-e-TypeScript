/* eslint-disable no-unused-vars */
import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';

import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
