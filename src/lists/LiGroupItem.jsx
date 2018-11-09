import React from 'react';
import PropTypes from 'prop-types';

const LiGroupItem = ({ children, index }) => {
  const style = { transitionDelay: `${(index * 0.02)}s` };
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
