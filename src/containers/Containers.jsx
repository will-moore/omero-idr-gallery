import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

const Containers = ({ dataFetch }) => (
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
        dataFetch.value.data.map((p, i) => (
          <LiGroupItem
            key={p['@id']}
            index={i}
          >
            <Link
              to={`/project/${p['@id']}`}
              style={blockLink}
            >
              {p.Name}
            </Link>
          </LiGroupItem>
        ))
      )}
    </CSSTransitionGroup>
  </UlGroup>
);

Containers.propTypes = {
  // see https://github.com/heroku/react-refetch#example
  dataFetch: PropTypes.shape({
    values: PropTypes.array,
    pending: PropTypes.bool,
    rejected: PropTypes.bool,
    reason: PropTypes.string,
    fulfilled: PropTypes.bool,
  }).isRequired,
};

export default Containers;
