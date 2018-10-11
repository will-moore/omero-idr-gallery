import React from 'react';
import PropTypes from 'prop-types';
import { listGroupItem } from '../styles';

const LiGroupItem = ({ children, index }) => {
  const style = Object.assign({}, { transitionDelay: `${(index * 0.02)}s` }, listGroupItem);
  return (
    <li style={style}>
      { children }
    </li>
  );
};

LiGroupItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  index: PropTypes.number.isRequired,
};

export default LiGroupItem;
