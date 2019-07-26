import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size,styles }) => {
  return (
    <View style={styles}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};



export { Spinner };