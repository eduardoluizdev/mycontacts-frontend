import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import { Routes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
