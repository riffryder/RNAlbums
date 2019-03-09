import React from 'react';
import { Text, View } from 'react-native';

import Header from './src/components/header';

const App = () => {
  const { appStyle } = styles;

  return (
    <View style={appStyle}>
      <Header />
    </View>
  );
};

const styles = {
  appStyle: {
    backgroundColor: 'white',
    height: 1000
  }
};

export default App;
