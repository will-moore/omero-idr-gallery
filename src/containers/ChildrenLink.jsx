import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const childTypes = {
  project: 'dataset',
  dataset: 'image',
};

const toCamelCase = text => `${text[0].toUpperCase()}${text.slice(1)}`;

const ChildrenLink = ({ datatype, id, style }) => {
  if (!childTypes[datatype]) {
    return (<span />);
  }
  return (
    <Link
      to={`/${datatype}s/${id}/${childTypes[datatype]}s/`}
      style={style}
    >
      {`${toCamelCase(childTypes[datatype])}s`}
    </Link>
  );
};

ChildrenLink.propTypes = {
  datatype: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired,
};

export default ChildrenLink;
