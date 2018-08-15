import React from 'react';
import PropTypes from 'prop-types';
import { listGroup } from '../styles';

const UlGroup = ({ children }) => (
  <ul style={listGroup}>
    { children }
  </ul>
);

UlGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default UlGroup;
