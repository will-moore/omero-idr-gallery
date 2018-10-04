import React from 'react';
import { Link } from 'react-router-dom';

export default ({datatype, id, children, style}) => (
  <Link
    to={`/${datatype}s/${id}/`}
    style={style}
  >
    {children}
  </Link>
);
