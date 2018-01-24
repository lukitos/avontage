import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = (props) => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/offers" className="nav-link">Offers</Link>
      </li>
      <li className="nav-item">
        <Link to="/purchases" className="nav-link">Purchases</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Logout</Link>
      </li>
    </ul>
  );
}

export default AppNav;
