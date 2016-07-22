import React, { PropTypes } from 'react';

var AlbumItems = React.createClass({
  render: function () {

    let data = this.props.data;

    return (
        <tr>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.userId}</td>
        </tr>
    );
  }
});
export default AlbumItems;
