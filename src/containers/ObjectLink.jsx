import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ObjectLink = ({ datatype, id, ...props }) => (
  <Link
    {...props}
    to={`/${datatype}s/${id}/`}
  />
);

ObjectLink.propTypes = {
  datatype: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ObjectLink;
