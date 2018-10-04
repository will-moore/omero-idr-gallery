import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/Header';
import './App.css';
import Projects from './containers/Projects';
import Project from './containers/Project';
import Datasets from './containers/Datasets';
import Dataset from './containers/Dataset';
import Images from './containers/Images';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="containerContainer">
        <Route
          exact
          path="/"
          render={props => (
            <Projects {...props} datatype="project" />
          )}
        />
        <Route
          exact
          path="/projects/:id/"
          render={props => (
            <Project {...props} datatype="project" />
          )}
        />
        <Route
          exact
          path="/projects/:id/datasets/"
          render={props => (
            <Datasets {...props} datatype="dataset" />
          )}
        />
        <Route
          exact
          path="/datasets/:id/"
          render={props => (
            <Dataset {...props} datatype="dataset" />
          )}
        />
        <Route
          exact
          path="/datasets/:id/images/"
          render={props => (
            <Images {...props} datatype="image" />
          )}
        />
      </div>
    </div>
  </Router>
);

export default App;
