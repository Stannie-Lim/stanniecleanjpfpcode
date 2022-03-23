import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to='/students'>Students</Link>
      <Link to='/campuses'>Campuses</Link>
    </nav>
  );
};