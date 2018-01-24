import React from 'react';
import OfferList from '../member/OfferList';
import PurchaseList from '../member/PurchaseList';

const Main = (props) => {
  return (
    <div className="container">
      <OfferList />
      <br />
      <PurchaseList />
    </div>
  );
}

export default Main;
