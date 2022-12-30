import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import globalStyles from '../styles';

const FormularioGasto = ({
  setModal,
  handleGasto,
  gasto,
  setGasto,
  eliminarGasto,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (gasto?.nombre) {
      setNombre(gasto.nombre);
      setCantidad(gasto.cantidad);
      setCategoria(gasto.categoria);
      setFecha(gasto.fecha);
      setId(gasto.id);
    }
  }, [gasto]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.contenedorBotones}>
        <Pressable
          style={[styles.btn, styles.btnCancelar]}
          onLongPress={() => {
            setModal(false);
            setGasto({});
          }}>
          <Text style={styles.btnTexto}>Cancelar</Text>
        </Pressable>
        {!!id && (
          <Pressable style={[styles.btn, styles.btnEliminar]}>
            <Text onLongPress={() => eliminarGasto(id)} style={styles.btnTexto}>
              Eliminar
            </Text>
          </Pressable>
        )}
      </View>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}
        </Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del Gasto ej. Comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del Gasto ej. Gs. 300.000"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker
            style={{color: '#64748B'}}
            selectedValue={categoria}
            onValueChange={itemValue => {
              setCategoria(itemValue);
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
        <Pressable
          style={styles.submitBtn}
          onPress={() => handleGasto({nombre, cantidad, categoria, id, fecha})}>
          <Text style={styles.submitBtnTexto}>
            {gasto?.nombre ? 'Confirmar Edición' : 'Agregar Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#397',
    flex: 1,
  },
  formulario: {
    ...globalStyles.contenedor,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#397885',
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: '#397885',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    color: '#64748B',
  },
  submitBtn: {
    backgroundColor: '#199',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  btnCancelar: {
    backgroundColor: '#db2777',
  },
  btnEliminar: {
    backgroundColor: 'red',
  },
  btnTexto: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default FormularioGasto;
