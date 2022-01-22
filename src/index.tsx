import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstarts an elegant, consisitent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);