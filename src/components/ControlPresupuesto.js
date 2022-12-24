import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos, presupuesto]);
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image
          style={styles.imagen}
          source={require('../images/grafico.jpg')}
        />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {''}</Text>
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {''}</Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {''}</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
  },
  contenedorTexto: {
    marginTop: 50,
  },
  valor: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    color: '#64748B',
  },
  label: {
    fontWeight: '700',
    color: '#A4BE7B',
  },
});
export default ControlPresupuesto;
