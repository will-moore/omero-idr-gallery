import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

const Containers = ({ dataFetch }) => (
  <UlGroup>
    {dataFetch.pending && (
      <span>
        Loading
      </span>
    )}

    {dataFetch.rejected && (
      <span>
        {dataFetch.reason}
      </span>
    )}

    {dataFetch.fulfilled && (
      dataFetch.value.map(p => (
        <LiGroupItem
          key={p.id}
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
