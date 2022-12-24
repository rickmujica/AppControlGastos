import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import {generarId} from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import FingerprintScannerComponent from './src/components/FingerprintScannerComponent';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleNuevoPresupuesto = presu => {
    if (presu > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0', 'OK');
    }
  };
  const handleGasto = gasto => {
    if (Object.values(gasto).includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    //Añadir nuevo gasto al state
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setModal(!modal);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.header}>
          <Header />
          {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          ) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />
          )}
        </View>
        {isValidPresupuesto && <ListadoGastos gastos={gastos} />}
      </ScrollView>
      {modal && (
        <Modal
          visible={modal}
          animationType="slide"
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <FormularioGasto setModal={setModal} handleGasto={handleGasto} />
        </Modal>
      )}
      {isValidPresupuesto && (
        <Pressable onPress={() => setModal(!modal)}>
          <Image
            source={require('./src/images/nuevo-gasto.png')}
            style={styles.imagen}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#5F8D4E',
    minHeight: 400,
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});

export default App;
