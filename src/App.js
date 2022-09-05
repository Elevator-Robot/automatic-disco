import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Amplify, { API } from 'aws-amplify';

const result = API.get('elevatorrobot1a1a1c2d', '/elevatorrobot1a1a1c2d', {});

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click this link
        </a>
      </header>
    </div>
    
  );
}

export default App;
