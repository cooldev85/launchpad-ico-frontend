import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { store } from './redux/store';

import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";

const mdTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <ThemeProvider theme={mdTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
