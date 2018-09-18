import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/Header';
import './App.css';
import Projects from './containers/Projects';
import Datasets from './containers/Datasets';

const App = () => (
  <Router>
    <div className="App">
      <Header />
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
