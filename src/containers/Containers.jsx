import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

const Containers = ({ dataFetch }) => (
  <UlGroup>
    <CSSTransitionGroup
      className="cssGroup"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={0}
    >
      {dataFetch.pending && (
        <li key="loading">
          Loading
        </li>
      )}

      {dataFetch.rejected && (
        <li key="rejected">
          {dataFetch.reason}
        </li>
      )}

      {dataFetch.fulfilled && (
        dataFetch.value.map((p, i) => (
          <LiGroupItem
            key={p.id}
            index={i}
          >
            <Link
              to={`/project/${p.id}`}
              style={blockLink}
            >
              {p.name}
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
