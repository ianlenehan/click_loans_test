
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import axios from 'axios';

import Button from 'components/Button';
import H1 from 'components/H1';
import AlbumItems from 'components/AlbumItems';

import styles from './styles.css';

var AlbumsPage = React.createClass({

  getInitialState: function () {
    return {
      albums: []
    }
  },

  componentDidMount: function () {
    const ALBUMS_URL = 'http://jsonplaceholder.typicode.com/albums';
    return axios.get(ALBUMS_URL).then(function (res) {
      var albums = res.data;
      var albumsArr = [];
      var albumNames = [];
      albums.length = 100;
      albumsArr = Array.prototype.slice.apply(albums);

      for (let i = 0; i < albums.length; i++) {
        albumNames.push(albums[i].title + ' (user: ' + albums[i].userId + ')');
      }
      this.setState({
        albums: albumsArr
      });
    }.bind(this));
  },

  render: function () {

    let albums = this.state.albums;

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
});

export default AlbumsPage;
