import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {

  return (
    <View>
      <Text>{props.albums.title}</Text>
    </View>
  )
}

export default AlbumDetail;