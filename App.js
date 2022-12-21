import React, {useState} from 'react';
import {Alert, StyleSheet, View, Pressable, Image, Modal} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';

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
  return (
    <View style={styles.contenedor}>
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
      {modal && (
        <Modal
          visible={modal}
          animationType="slide"
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <FormularioGasto setModal={setModal} />
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
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default App;
