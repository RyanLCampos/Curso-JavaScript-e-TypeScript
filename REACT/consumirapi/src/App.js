/* eslint-disable no-unused-vars */
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-tailwind/react';
import './tailwind.css';

import store, { persistor } from './store/index';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import { HeaderNovo } from './components/headernovo';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider>
            <HeaderNovo />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
