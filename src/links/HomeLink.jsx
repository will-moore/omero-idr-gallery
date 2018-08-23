import React from 'react';
import { Link } from 'react-router-dom';
import { homeLink } from '../styles';

export default () => (
  <Link to="/" style={homeLink}>
    Home
  </Link>
);
