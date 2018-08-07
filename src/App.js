import React, { Component } from 'react';
import logo from './logo-idr.svg';
import './App.css';
import Projects from './containers/Projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Projects/>
      </div>
    );
  }
}

export default App;
