import React from 'react';
import PropTypes from 'prop-types';
import { listGroupItem } from '../styles';

const LiGroupItem = ({ children }) => (
  <li style={listGroupItem}>
    { children }
  </li>
);

LiGroupItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LiGroupItem;
