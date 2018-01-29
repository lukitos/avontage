import React from 'react';
import { Link } from 'react-router-dom';

const MemberHeadline = (props) => {
  return (
    <div className="row">
      <div className="col">
        <h2>VIPRide.com</h2>
      </div>
      <div className="col">
        <Link className="btn btn-info pull-right" to={`/profile/`}>
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default MemberHeadline;
