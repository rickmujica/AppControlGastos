import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
export default class FingerprintScannerComponent extends Component {
  constructor() {
    super();

    this.state = {
      biometryType: null,
    };
  }
  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        this.setState({biometryType});
      })
      .catch(error => console.log('isSensorAvailable error => ', error));
  }

  getMessage = () => {
    const {biometryType} = this.state;
    if (biometryType === 'Face ID') {
      return 'Escanea tu rostro para continuar';
    } else {
      return 'Escanea tu huella para continuar';
    }
  };

  showAuthenticationDialog = () => {
    const {biometryType} = this.state;
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: this.getMessage(),
      })
        .then(() => {
          console.log('Hiciste click en autenticar y fue exitoso');
          Alert.alert('Autenticacion exitosa');
        })
        .catch(error => {
          console.log('authenticate error is => ', error);
        });
    } else {
      console.log('La autenticacion biometrica no esta disponible');
    }
  };

  render() {
    const {biometryType} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.showAuthenticationDialog();
          }}>
          <Text style={styles.textStyle}>Autenticar</Text>
        </TouchableOpacity>
        <Text
          style={
            styles.biometryText
          }>{`biometryType es  ${biometryType}`}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '70%',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  buttonText: {color: 'red', fontSize: 17, fontWeight: 'bold'},
  biometryText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#000',
  },
  textStyle: {
    color: '#FFF',
  },
});
