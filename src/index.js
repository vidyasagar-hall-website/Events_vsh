import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import "./vendor/bootstrap/css/bootstrap.min.css"; 
  
  




ReactDOM.render(
  <React.StrictMode>
    <div className="test">
      <div class="container">
        <div className="row">
          <h1 className = "heading">Events</h1>
          <Card />    
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />                  

        </div>
      </div>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
