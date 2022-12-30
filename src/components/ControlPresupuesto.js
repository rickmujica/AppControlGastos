import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );

    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje =
      ((presupuesto - totalDisponible) / presupuesto) * 100;

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);

    setDisponible(totalDisponible);

    setGastado(totalGastado);
  }, [gastos, presupuesto]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <CircularProgress
          value={porcentaje}
          duration={1000}
          radius={150}
          valueSuffix={'%'}
          title="Gastado"
          inActiveStrokeColor="#f5f5f5"
          inActiveStrokeWidth={20}
          activeStrokeColor={'#199'}
          activeStrokeWidth={20}
          titleStyle={{fontWeight: 'bold', fontSize: 25, color: '#397885'}}
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
        <Pressable style={styles.boton} onLongPress={resetearApp}>
          <Text style={styles.botonTexto}>Reiniciar App</Text>
        </Pressable>
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
    color: '#3978',
  },
  boton: {
    backgroundColor: '#db2777',
    padding: 10,
    marginTop: 40,
    borderRadius: 5,
  },
  botonTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default ControlPresupuesto;
