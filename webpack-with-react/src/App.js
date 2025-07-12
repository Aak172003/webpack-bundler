import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Webpack + React + Babel + JavaScript + CSS + SVG</h1>

      <div className='image-container'>
        <img src={logo} className='App-logo' alt="logo" />

      </div>
    </div>
  );
}

export default App;
