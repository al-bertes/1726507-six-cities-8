import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offer } from './mocks/offers';


ReactDOM.render(
  <React.StrictMode>
    <App
      offer={offer}
    />
  </React.StrictMode>,
  document.getElementById('root'));
