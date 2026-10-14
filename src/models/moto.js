/**
 * Moto.js - SUBCLASE de Vehiculo
 * ------------------------------------------------
 * Misma idea que Carro, pero con otro formato de placa.
 * Esto es POLIMORFISMO: validar() es el mismo método heredado,
 * pero se comporta distinto porque patronIdentificador() cambia.
 */
import Vehiculo from './Vehiculo';
import { TIPOS_VEHICULO } from '../config/constantes';

export default class Moto extends Vehiculo {
  constructor(placa) {
    super(placa, TIPOS_VEHICULO.MOTO);
  }

  // Placa de moto en Colombia: 3 letras + 2 números + 1 letra (ABC12D).
  // También se acepta el formato antiguo sin letra final (ABC12).
  patronIdentificador() {
    return /^[A-Z]{3}\d{2}[A-Z]?$/;
  }

  ayudaFormato() {
    return 'Placa de moto: 3 letras, 2 números y opcionalmente 1 letra (ej: ABC12D).';
  }

  icono() {
    return 'motorbike';
  }
}