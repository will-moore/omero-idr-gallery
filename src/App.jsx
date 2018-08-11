import React from 'react';
import logo from './logo-idr.svg';
import './App.css';
import Projects from './containers/Projects';

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Projects />
  </div>
);
