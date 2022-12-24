import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyles from '../styles';

const Gasto = ({gasto}) => {
  const {nombre, cantidad, categoria, id} = gasto;
  return (
    <View style={styles.contenedor}>
      <Text style={styles.text}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  text: {
    color: '#64748B',
  },
});

export default Gasto;
