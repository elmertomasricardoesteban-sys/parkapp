import { StyleSheet, Text, View } from 'react-native';
import { colores, tipografia } from './src/theme/tema';
import { CAPACIDAD_INICIAL, TARIFAS_POR_DEFECTO } from './src/config/constantes';

export default function App() {
  const total = CAPACIDAD_INICIAL.CARRO + CAPACIDAD_INICIAL.MOTO + CAPACIDAD_INICIAL.BICICLETA;
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>ParkApp</Text>
      <Text>Capacidad total: {total} celdas</Text>
      <Text>{TARIFAS_POR_DEFECTO.CARRO.valorHora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: tipografia.grande, fontWeight: '700', color: colores.primario },
});
