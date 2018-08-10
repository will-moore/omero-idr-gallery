import React from 'react';
import PropTypes from 'prop-types';
import { listGroup } from '../styles';

const UlGroup = ({ children }) => (
  <ul style={listGroup}>
    { children }
  </ul>
);

UlGroup.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UlGroup;
