/**
 * Import the react module base
 */
import React from 'react';

/**
 * This module is for render HTML
 */
import ReactDOM from 'react-dom';

/**
 * Import the main component of the app
 */
import App from './App';

/**
 * Import the main CSS of the aplication
 */
import './index.css';

/**
 * <React.StrictMode> it is use in DEV mode for show more
 * details about erros and warnings.
 * This is auto removed in the production mode.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
