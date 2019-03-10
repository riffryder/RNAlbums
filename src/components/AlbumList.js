import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        console.log("THIS IS THE RESPONSE FROM API", response);
        this.setState({
          albums: response.data
        });

        // console.log('THIS IS THE NEW STATE', this.state);
      });
  }

  renderAlbums() {
    // console.log("THIS IS THE STATE", this.state)
    return this.state.albums.map((album) => 
      <AlbumDetail key={album.title} albums={album}/>
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
