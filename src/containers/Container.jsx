import React from 'react';
import PropTypes from 'prop-types';
import ChildrenLink from './ChildrenLink';
import MapAnnotations from '../annotations/MapAnnotations';

const Project = ({ dataFetch, match, datatype }) => (
  <div>
    {(dataFetch.fulfilled && dataFetch.value.data.Description) && (`Description: ${dataFetch.value.data.Description}`)}
    <hr />
    <ChildrenLink
      datatype={datatype}
      id={match.params.id}
    />

    <MapAnnotations
      datatype={datatype}
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
  datatype: PropTypes.string.isRequired,
};

export default Project;
