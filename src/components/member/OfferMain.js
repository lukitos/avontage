import React from 'react';
import MemberHeadline from '../admin/MemberHeadline';
import OfferList from './OfferList';

const OfferMain = (props) => {
  return (
    <div className="container">
      <MemberHeadline />
      <br />
      <OfferList />
    </div>
  );
}

export default OfferMain;
