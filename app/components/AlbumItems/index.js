import React from 'react';

class AlbumItems extends React.Component {
  propTypes: {
    albumData: React.PropTypes.array,
  }
  render() {
    const { albumData } = this.props;
    return (
      <tr>
        <td>{albumData.id}</td>
        <td>{albumData.title}</td>
        <td>{albumData.userId}</td>
      </tr>
    );
  }
}


export default AlbumItems;
