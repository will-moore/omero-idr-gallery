import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UlGroup from '../lists/UlGroup';
import LiGroupItem from '../lists/LiGroupItem';
import { blockLink } from '../styles';

const Containers = ({ data }) => (
  <UlGroup>
    {data.fulfilled ?
      data.value.map(p => (
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
      )) : (
        <span>
          {'Loading'}
        </span>
      )
    }
  </UlGroup>
);

Containers.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Containers;
