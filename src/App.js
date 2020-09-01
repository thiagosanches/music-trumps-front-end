import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {AppRoutes} from './Routes';
import {TopMenuView} from './AppMenu';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopMenuView />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
