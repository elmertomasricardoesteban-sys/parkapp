// App.js (prueba temporal de la Fase 4)

import { ScrollView, Text } from 'react-native';
import { crearVehiculo } from './src/models/fabricaVehiculos';


const pruebas = [
  ['CARRO', 'abc-123'],
  ['MOTO', 'XYZ12D'],
  ['MOTO', 'ABC123'],
  ['BICICLETA', 'BICI01'],
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ padding: 40 }}>
      {pruebas.map(([tipo, placa]) => {
        const v = crearVehiculo(tipo, placa);
        const r = v.validar();
        return (
          <Text key={tipo + placa}>
            {v.descripcion()} - {r.valido ? 'VÁLIDO' : r._____}
          </Text>
        );
      })}
    </ScrollView>
  );
}

