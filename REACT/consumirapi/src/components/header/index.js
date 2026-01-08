/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function HeaderAntigo() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={25} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={25} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={25} />
      </Link>
    </Nav>
  );
}
