import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const offersValue = {
  value: [1, 2, 3, 4, 5, 6],
};

ReactDOM.render(
  <React.StrictMode>
    <App valueOffers={offersValue.value}/>
  </React.StrictMode>,
  document.getElementById('root'));
