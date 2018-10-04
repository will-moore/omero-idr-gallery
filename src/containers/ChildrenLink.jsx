import React from 'react';
import { Link } from 'react-router-dom';

const childTypes = {
  project: 'dataset',
  dataset: 'image',
};

const toCamelCase = text => `${text[0].toUpperCase()}${text.slice(1)}`;

export default ({datatype, id, style}) => {
  return (
    <Link
      to={`/${datatype}s/${id}/${childTypes[datatype]}s/`}
      style={style}
    >
      {`${toCamelCase(childTypes[datatype])}s`}
    </Link>
  );
};
