import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//o id root está no index.html
//instalar um cliente http pra fazer chamadas ao backend q se chama: axios