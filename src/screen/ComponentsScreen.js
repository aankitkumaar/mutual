import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
  <Text style={styles.textstyle}> My Name is ankit kumar</Text>
  <Text style= {styles.textstyle}>My age is 29year</Text>
  </View>
  );
 
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 90,
    textAlign: 'center',
    backgroundColor: 'red',
    // justifyContent:'center',

    
  }
});

export default ComponentsScreen;
