// Archivo: src/models/fabricaVehiculos.js

import Carro from './Carro';
import Moto from './Moto';
import Bicicleta from './Bicicleta';
import { TIPOS_VEHICULO } from '../config/constantes';

/**
 * @param {string} tipo CARRO | MOTO | BICICLETA
 * @param {string} identificador placa o código
 * @returns {import('./vehiculo').default}
 */
export function crearVehiculo(tipo, identificador) {
  switch (tipo) {
    case TIPOS_VEHICULO.CARRO:
      return new Carro(identificador);
    case TIPOS_VEHICULO.MOTO:
      return new Moto(identificador);
    case TIPOS_VEHICULO.BICICLETA:
      return new Bicicleta(identificador);
    default:
      throw new Error(`Tipo de vehículo desconocido: ${tipo}`);
  }
}

/** Nombre de icono sin necesidad de tener un identificador. */
export function iconoPorTipo(tipo) {
  // Se crea un objeto "de muestra" y se aprovecha su método icono().
  const muestras = {
    [TIPOS_VEHICULO.CARRO]: 'AAA000',
    [TIPOS_VEHICULO.MOTO]: 'AAA00A',
    [TIPOS_VEHICULO.BICICLETA]: 'BICI01',
  };
  return crearVehiculo(tipo, muestras[tipo]).icono();
}

/** Nombre bonito para mostrar al usuario. */
export function nombreTipo(tipo) {
  const nombres = {
    [TIPOS_VEHICULO.CARRO]: 'Carro',
    [TIPOS_VEHICULO.MOTO]: 'Moto',
    [TIPOS_VEHICULO.BICICLETA]: 'Bicicleta',
  };
  return nombres[tipo] ?? tipo;
}