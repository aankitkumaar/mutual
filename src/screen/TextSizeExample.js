import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextSizeExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Large Text</Text>
      <Text style={styles.mediumText}>Medium Text</Text>
      <Text style={styles.smallText}>Small Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  largeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  mediumText: {
    fontSize: 24,
    color: '#555',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 16,
    color: '#777',
  },
});

export default TextSizeExample;
