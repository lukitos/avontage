import React from 'react';
import MemberHeadline from '../admin/MemberHeadline';
import PurchaseList from './PurchaseList';

const PurchaseMain = (props) => {
  return (
    <div className="container">
      <MemberHeadline />
      <br />
      <PurchaseList />
    </div>
  );
}

export default PurchaseMain;
