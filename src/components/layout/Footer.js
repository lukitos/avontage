import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/contact" className="nav-link footer-nav">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link footer-nav">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link footer-nav">Help</Link>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
