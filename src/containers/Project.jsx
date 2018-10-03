import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../fetch/constants';
import MapAnnotations from '../annotations/MapAnnotations';
import connect from '../fetch/connect';

const Project = ({ dataFetch, match }) => (
  <div>
    {(dataFetch.fulfilled && dataFetch.value.data.Description) && (`Description: ${dataFetch.value.data.Description}`)}
    <hr />
    <Link
      to={`/project/${match.params.id}/datasets/`}
    >
      Datasets
    </Link>

    <MapAnnotations
      datatype="project"
      id={match.params.id}
    />

  </div>
);


Project.propTypes = {
// see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const withData = connect(({ match }) => ({
  dataFetch: `${BASE_URL}/api/v0/m/projects/${match.params.id}/`,
}));
export default withData(Project);
