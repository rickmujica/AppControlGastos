import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({gastos}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>
      {gastos.length === 0 ? (
        <Text style={styles.noGastos}>No hay gastos</Text>
      ) : (
        gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 70,
  },
  titulo: {
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
  },
  noGastos: {
    color: '#64748B',
    marginVertical: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
export default ListadoGastos;
