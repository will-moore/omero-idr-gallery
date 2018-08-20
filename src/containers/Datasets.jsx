
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';

const Datasets = ({ match, setLoading, setSelectedId }) => {
  const projectId = parseInt(match.params.id, 10);
  return (
    <Projects
      url={`http://idr.openmicroscopy.org/webgateway/proj/${projectId}/children/`}
      setLoading={setLoading}
      setSelectedId={setSelectedId}
    />
  );
};

Datasets.propTypes = {
  match: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};

export default Datasets;
