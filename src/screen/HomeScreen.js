import React from 'react';
import { Text, StyleSheet,View } from 'react-native';

const HomeScreen = () => {
  const demoText = <Text style = {styles.veriableText}>Welcome Demo Text</Text>;
  return(
  <View>
  <Text style={styles.text}>Welcome Man</Text>
  {demoText}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize:50,
    textAlign: 'center',
    backgroundColor: 'red',
    // justifyContent:'center',
  },
  veriableText: {
    backgroundColor: 'pink'
  }
});

export default HomeScreen;
