/* eslint-disable no-unused-vars */
import React from 'react';

import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';

import Routes from './routes';

import { Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
