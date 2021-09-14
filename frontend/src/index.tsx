import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//pages
import LandingPage from "./pages/LandingPage";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

