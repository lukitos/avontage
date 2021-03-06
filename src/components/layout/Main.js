import React from 'react';
import OfferList from '../member/OfferList';
import PurchaseList from '../member/PurchaseList';
import MemberHeadline from '../admin/MemberHeadline';

const Main = (props) => {
  return (
    <div className="container">
      <MemberHeadline />
      <br />
      <OfferList />
      <br />
      <PurchaseList />
    </div>
  );
}

export default Main;
