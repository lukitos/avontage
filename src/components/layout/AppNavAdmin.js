import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = (props) => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/admin" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/members" className="nav-link">Members</Link>
      </li>
      <li className="nav-item">
        <Link to="/offers" className="nav-link">Offers</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className="nav-link">Categories</Link>
      </li>
      <li className="nav-item">
        <Link to="/setting" className="nav-link">Settings</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Logout</Link>
      </li>
    </ul>
  );
}

export default AppNav;
