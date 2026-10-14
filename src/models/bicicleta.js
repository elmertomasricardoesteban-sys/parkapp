/** *bicicleta.js - SUBCLASE de Vehiculo
 * Las bicicletas no tienen placa. El parqueadero les asigna un
 * código interno o se usa el serial del marco.
 * Además REDEFINE (override) descripcion() para mostrar otro texto.
 */
import Vehiculo from './Vehiculo';
import { TIPOS_VEHICULO } from '../config/constantes';

export default class Bicicleta extends Vehiculo {
  constructor(codigo) {
    super(codigo, TIPOS_VEHICULO.BICICLETA);
  }

  // Código libre: entre 3 y 12 letras o números (ej: BICI01, SN88421)
  patronIdentificador() {
    return /^[A-Z0-9]{3,12}$/;
  }

  ayudaFormato() 
    {return 'Código de bicicleta: 3 a 12 letras o números (ej: BICI01).';
  }

  icono() {
    return 'bicycle';
  }

  // Override: se reemplaza el comportamiento heredado.
  descripcion() {
    return `Bicicleta con código ${this.identificador}`;}}