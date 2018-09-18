import React from 'react';
import PropTypes from 'prop-types';
import connect from '../fetch/connect';

const ProjectName = ({ projectFetch }) => (
  <div>
    {projectFetch.pending && (
      <span>
        Loading
      </span>
    )}

    {projectFetch.rejected && (
      <span>
        {projectFetch.reason}
      </span>
    )}
    { projectFetch.fulfilled && projectFetch.value.name }
  </div>
);

ProjectName.propTypes = {
  projectFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
};

const withProjects = connect(({ match }) => ({
  projectFetch: `https://idr.openmicroscopy.org/webgateway/proj/${match.params.id}/detail/`,
}));
export default withProjects(ProjectName);
