import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App url='https://cdn.sixt.io/codingtask/offers.json' />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
