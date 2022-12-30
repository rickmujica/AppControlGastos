import React, {useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet} from 'react-native';
import globalStyles from '../styles';

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {
  useEffect(() => {
    if (filtro === '') {
      setGastosFiltrados([]);
    } else {
      const gastosFiltrados = gastos.filter(
        gasto => gasto.categoria === filtro,
      );
      setGastosFiltrados(gastosFiltrados);
    }
}, [filtro]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Filtrar Gastos</Text>
      <Picker
        style={styles.labelPicker}
        selectedValue={filtro}
        onValueChange={valor => {
          setFiltro(valor);
        }}>
        <Picker.Item label="-- Seleccione --" value="" />
        <Picker.Item label="Ahorro" value="ahorro" />
        <Picker.Item label="Comida" value="comida" />
        <Picker.Item label="Casa" value="casa" />
        <Picker.Item label="Gastos Varios" value="gastos" />
        <Picker.Item label="Ocio" value="ocio" />
        <Picker.Item label="Salud" value="salud" />
        <Picker.Item label="Suscripciones" value="suscripciones" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{translateY: 0}],
    marginTop: 78,
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#397885',
  },
  labelPicker: {
    color: '#397885',
  },
});

export default Filtro;
