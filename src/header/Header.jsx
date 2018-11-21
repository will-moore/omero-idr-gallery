
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ProjectName, DatasetName } from './ProjectName';
import IdrLogo from '../svg/IdrLogo';

const Header = ({ dataFetch }) => (
  <div className="App-header">
    {dataFetch
      ? (dataFetch.fulfilled && dataFetch.value.data.Name) && dataFetch.value.data.Name
      : (
        <span>
          <Route
            exact
            path="/"
            component={IdrLogo}
          />
          <Route
            path="/projects/:id/datasets/"
            component={ProjectName}
          />
          <Route
            path="/datasets/:id/images/"
            component={DatasetName}
          />
        </span>
      )
    }
  </div>
);

Header.propTypes = {
  // see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
};

export default Header;
