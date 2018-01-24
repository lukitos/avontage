import React from 'react';
import MemberList from '../admin/MemberList';
import CategoryList from '../admin/CategoryList';

const MainAdmin = (props) => {
  return (
    <div className="container">
      <MemberList />
      <br />
      <CategoryList />
    </div>
  );
}

export default MainAdmin;
