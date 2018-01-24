import React from 'react';
import { Link } from 'react-router-dom';
import Member from './Member';

const MemberList = (props) => {
  return (
    <div className="container">

      <div className="card">

        <div className="card-header">
          Members
        </div>

        <div className="card-body">

          <Link className="btn btn-outline-info" to={`/profile/add`}>
            Add a New Member
          </Link>
          <br /><br />

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Biz Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Phone</th>
                <th scope="col">Balance</th>
                <th scope="col">#Offers</th>
                <th scope="col">Qty</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Member />
              <Member />
              <Member />
              <Member />
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default MemberList;
