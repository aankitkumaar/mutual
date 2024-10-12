import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const ButtonMatrix = () => {
  // Define the size of the matrix (e.g., 3x3)
  const rows = 3;
  const columns = 3;

  // Function to handle button press
  const handlePress = (row, col) => {
    Alert.alert(`Button Pressed`, `You pressed the button at row ${row + 1}, column ${col + 1}`);
  };

  return (
    <View style={styles.container}>
      {/* Create rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {/* Create columns for each row */}
          {Array.from({ length: columns }).map((_, colIndex) => (
            <View key={colIndex} style={styles.buttonContainer}>
              <Button
                title={`R${rowIndex + 1}C${colIndex + 1}`}
                onPress={() => handlePress(rowIndex, colIndex)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 5,
  },
});

export default ButtonMatrix;
