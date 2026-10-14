/**
 * Carro.js - SUBCLASE de Vehiculo
 * ------------------------------------------------
 * "extends" significa HERENCIA: Carro recibe todo lo que tiene
 * Vehiculo (getters, validar(), descripcion()...) y solo define
 * lo que lo hace diferente: su formato de placa y su icono.
 */

import Vehiculo from './Vehiculo';
import { TIPOS_VEHICULO } from '../config/constantes';

export default class Carro extends Vehiculo {
  constructor(placa) {
    // super(...) llama al constructor de la superclase (Vehiculo).
    // Es OBLIGATORIO llamarlo antes de usar "this".
    super(placa, TIPOS_VEHICULO.CARRO);
  }

  // Placa de carro particular en Colombia: 3 letras + 3 números (ABC123)
  patronIdentificador() {
    return /^[A-Z]{3}\d{3}$/;
  }    

  ayudaFormato() {
    return 'Placa de carro: 3 letras y 3 números (ej: ABC123).';
  }

  icono() {
    return 'car';
  }
}