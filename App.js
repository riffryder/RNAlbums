import React from 'react';
import { Text, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  const { appStyle } = styles;

  return (
    <View style={appStyle}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

const styles = {
  appStyle: {
    backgroundColor: 'white',
    flex: 1
  }
};

export default App;
