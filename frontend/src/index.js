import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


