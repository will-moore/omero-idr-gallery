import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeLink from './links/HomeLink';
import IdrLogo from './svg/IdrLogo';
import './App.css';
import Projects from './containers/Projects';
import Datasets from './containers/Datasets';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <HomeLink />
        </div>
        <IdrLogo />
      </header>
      <div className="containerContainer">
        <Route
          exact
          path="/"
          component={Projects}
        />
        <Route
          path="/project/:id"
          component={Datasets}
        />
      </div>
    </div>
  </Router>
);

export default App;
