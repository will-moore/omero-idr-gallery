
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_URL } from '../fetch/constants';
import connect from '../fetch/connect';

const ContainerName = ({ projectFetch }) => (
  <div>
    {projectFetch.pending && (
      <span>
        Loading...
      </span>
    )}

    {projectFetch.rejected && (
      <span>
        {projectFetch.reason}
      </span>
    )}
    { projectFetch.fulfilled && projectFetch.value.data.Name }
  </div>
);

ContainerName.propTypes = {
  projectFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
};

const withProjects = connect(({ match }) => ({
  projectFetch: `${BASE_URL}/api/v0/m/projects/${match.params.id}/`,
}));
export const ProjectName = withProjects(ContainerName);


const withDatasets = connect(({ match }) => ({
  projectFetch: `${BASE_URL}/api/v0/m/datasets/${match.params.id}/`,
}));
export const DatasetName = withDatasets(ContainerName);
