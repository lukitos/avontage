import React from 'react';
import Purchase from './Purchase';

const PurchaseList = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          My Purchases
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Headline</th>
                <th scope="col">Biz Name</th>
                <th scope="col">Value</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <Purchase />
              <Purchase />
              <Purchase />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PurchaseList;
