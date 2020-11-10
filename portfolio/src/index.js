import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

