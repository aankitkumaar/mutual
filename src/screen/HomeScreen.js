import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Welcome Man</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    backgroundColor: 'red',
    // justifyContent:'center',

    fontSize: 30
  }
});

export default HomeScreen;
