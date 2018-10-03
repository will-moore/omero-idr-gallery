
import React from 'react';
import { Route } from 'react-router-dom';
import IdrLogo from '../svg/IdrLogo';
import ProjectName from './ProjectName';

export default () => (
  <div className="App-header">
    <Route
      exact
      path="/"
      component={IdrLogo}
    />
    <Route
      path="/project/:id/"
      component={ProjectName}
    />
  </div>
);
