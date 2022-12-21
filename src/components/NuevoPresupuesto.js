import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import globalStyles from '../styles';

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  handleNuevoPresupuesto,
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir Presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto: Ej. 1.500.000 gs"
        style={styles.input}
        value={presupuesto}
        onChangeText={setPresupuesto}
      />
      <Pressable
        style={styles.btn}
        onPress={() => handleNuevoPresupuesto(presupuesto)}>
        <Text style={styles.btnTexto}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#A4BE7B',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#285430',
    padding: 10,
    borderRadius: 10,
  },
  btnTexto: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default NuevoPresupuesto;
