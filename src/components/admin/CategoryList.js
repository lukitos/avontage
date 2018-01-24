import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const CategoryList = (props) => {
  return (
    <div className="container">

      <div className="card">

        <div className="card-header">
          Categories
        </div>

        <div className="card-body">

          <Link className="btn btn-outline-info" to={``}>
            Add a New Category
          </Link>
          <br /><br />

          <table className="table table-hover">

            <thead>
              <tr>
                <th>Category</th>
                <th>Sub Category</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <Category />
              <Category />
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default CategoryList;
