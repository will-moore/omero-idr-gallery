import React from 'react';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';

export default () => (
  <div className="App">
    <header className="App-header loading">
      <IdrLogo />
    </header>
    <Projects />
  </div>
);
