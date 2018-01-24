import React from 'react';
import { Link } from 'react-router-dom';
import Offer from './Offer';

const OfferList = (props) => {
  return (
    <div className="container">

      <div className="card">

        <div className="card-header">
          My Offers
        </div>

        <div className="card-body">

          <Link className="btn btn-outline-info" to={`/offer/add`}>
            Add a New Offer
          </Link>
          <br /><br />

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Headline</th>
                <th scope="col">Value</th>
                <th scope="col">Total Cap</th>
                <th scope="col">Monthly</th>
                <th scope="col">#Sold</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Offer />
              <Offer />
              <Offer />
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default OfferList;
