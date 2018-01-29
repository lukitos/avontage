import React from 'react';

const Member = (props) => {
  return (
    <tr>
      <td>TBD</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>
        <a className="btn btn-outline-warning" aria-label="Edit">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
        &nbsp;
        <a className="btn btn-outline-info" aria-label="Offers">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </a>
        &nbsp;
        <a className="btn btn-outline-danger" aria-label="Delete">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </a>
      </td>
    </tr>
  );
}

export default Member;
