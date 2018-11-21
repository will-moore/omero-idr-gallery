import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import connect from '../fetch/connect';
import { BASE_URL } from '../fetch/constants';
import MapAnnotation from './MapAnnotation';

const MapAnnotations = ({ dataFetch }) => (
  <ul>
    {dataFetch.pending && (
      <li
        index={0}
      >
        <span>
          Loading...
        </span>
      </li>
    )}
    <CSSTransitionGroup
      className="cssGroup"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={0}
    >
      {dataFetch.rejected && (
        <li key="rejected">
          {dataFetch.reason}
        </li>
      )}

      {(dataFetch.fulfilled && dataFetch.value.annotations.length) && (
        dataFetch.value.annotations.map(ann => (
          <MapAnnotation
            ann={ann}
          />
        ))
      )}
    </CSSTransitionGroup>
  </ul>
);

MapAnnotations.propTypes = {
  // see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
};

const withData = connect(({ datatype, id }) => ({
  dataFetch: `${BASE_URL}/webclient/api/annotations/?type=map&${datatype}=${id}`,
}));
export default withData(MapAnnotations);
