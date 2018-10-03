import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';
import connect from '../fetch/connect';
import { BASE_URL } from '../fetch/constants';

const MapAnnotations = ({ dataFetch }) => (
  <UlGroup>
    {dataFetch.pending && (
      <LiGroupItem>
        <span style={blockLink}>
          Loading...
        </span>
      </LiGroupItem>
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

      {dataFetch.fulfilled && (
        dataFetch.value.annotations.map((ann, i) => (
          <LiGroupItem
            key={ann.id}
            index={i}
          >
            <span
              style={blockLink}
            >
              {ann.values.map(v => (
                <div>
                  {v[0]}
                  {': '}
                  {v[1]}
                </div>))}
            </span>
          </LiGroupItem>
        ))
      )}
    </CSSTransitionGroup>
  </UlGroup>
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
