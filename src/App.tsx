import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import CreateGlobalStyle from './styles/globals';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <CreateGlobalStyle />
  </Router>
);

export default App;
