
import React from 'react';
import axios from 'axios';

import AlbumItems from 'components/AlbumItems';

class AlbumsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    const ALBUMS_URL = 'http://jsonplaceholder.typicode.com/albums';
    return axios.get(ALBUMS_URL).then(function (res) {
      const albums = res.data;
      let albumsArr = [];
      const albumNames = [];
      albums.length = 100;
      albumsArr = Array.prototype.slice.apply(albums);

      for (let i = 0; i < albums.length; i++) {
        albumNames.push(albums[i].title + ' (user: ' + albums[i].userId + ')');
      }
      this.setState({
        albums: albumsArr,
      });
    }.bind(this));
  }

  render() {
    const albums = this.state.albums;
    let listItems = albums.map((albumsObj) => {
      return <AlbumItems key={albumsObj.id} data={albumsObj} />;
    });

    return (
      <div>
        <h2>List of Albums</h2>
        <table>
          <tbody>
            <tr>
              <th>Album ID</th>
              <th>Album Name</th>
              <th>User ID</th>
            </tr>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlbumsPage;
