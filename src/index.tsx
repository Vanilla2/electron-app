import React from 'react';
import ReactDOM from 'react-dom';
import './renderer/index.scss';
import App from './renderer/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
