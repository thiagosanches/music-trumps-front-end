import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {AppRoutes} from './Routes';
import {TopMenuView} from './AppMenu';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <TopMenuView />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
