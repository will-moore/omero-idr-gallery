
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_URL } from '../fetch/constants';
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
  projectFetch: `${BASE_URL}/webgateway/proj/${match.params.id}/detail/`,
}));
export default withProjects(ProjectName);
