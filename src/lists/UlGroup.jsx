import React from 'react';
import PropTypes from 'prop-types';

const UlGroup = ({ children }) => (
  <ul>
    { children }
  </ul>
);

UlGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UlGroup;
