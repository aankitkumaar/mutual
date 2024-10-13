import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera } from 'react-native-camera';

const QrCodeScreen = () => {
  const [qrValue, setQrValue] = useState('');
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Function to handle scanning the QR code
  const handleBarCodeScanned = ({ data }) => {
    setScannedData(data);
    setIsScanning(false);  // Stop scanning once QR code is scanned
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create and Scan QR Codes</Text>

      {/* QR Code Generator */}
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        onChangeText={setQrValue}
        value={qrValue}
      />
      {qrValue ? (
        <QRCode
          value={qrValue}
          size={200}
        />
      ) : (
        <Text style={styles.placeholderText}>Your QR Code will appear here</Text>
      )}

      {/* Button to start scanning */}
      <Button title={isScanning ? "Stop Scanning" : "Scan QR Code"} onPress={() => setIsScanning(!isScanning)} />

      {/* QR Code Scanner */}
      {isScanning && (
        <RNCamera
          style={styles.camera}
          onBarCodeRead={handleBarCodeScanned}
          captureAudio={false}
        >
          <Text style={styles.scannerText}>Point the camera at a QR code</Text>
        </RNCamera>
      )}

      {/* Display Scanned Data */}
      {scannedData && (
        <Text style={styles.resultText}>Scanned Data: {scannedData}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  placeholderText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  camera: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  scannerText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  resultText: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default QrCodeScreen;
