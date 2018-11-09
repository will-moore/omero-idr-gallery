import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Projects from './containers/Projects';
import Project from './containers/Project';
import Datasets from './containers/Datasets';
import Dataset from './containers/Dataset';
import Images from './containers/Images';
import Image from './containers/Image';

const App = () => (
  <Router>
    <div className="App">
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
      <Route
        exact
        path="/images/:id/"
        render={props => (
          <Image {...props} datatype="image" />
        )}
      />
    </div>
  </Router>
);

export default App;
