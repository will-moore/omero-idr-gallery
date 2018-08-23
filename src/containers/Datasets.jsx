
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';

const Datasets = ({ match, setLoading }) => {
  const projectId = parseInt(match.params.id, 10);
  return (
    <Projects
      url={`https://idr.openmicroscopy.org/webgateway/proj/${projectId}/children/`}
      setLoading={setLoading}
    />
  );
};

Datasets.propTypes = {
  match: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Datasets;
