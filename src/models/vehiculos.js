/**
 * Vehículo.js - CLASE ABSTRACTA (superclase)
 * -------------------------------------------------------------
 * Representa "cualquier vehículo" que entra al parqueadero.
 * No se puede crear un Vehículo directamente: siempre se crea
 * un Carro, una Moto o una Bicicleta (subclases).
 * 
 * Conceptos de POO que aparecen aquí:
 * - Clase abstracta   -> el constructor impide "new Vehiculo()".
 * - Encapsulamiento   -> #identificador es PRIVADO (solo esta clase lo toca).
 * - Getters           -> forma controlada de leer los datos privados.
 * - Método abstracto  -> patronIdentificador() DEBE ser redefinido por cada hija.
 * - Polimorfismo      -> validar() funciona distinto según la subclase.
 */
export default class Vehiculo {
  // Atributos privados: el "#" hace que no se puedan leer ni cambiar
  // desde fuera de la clase (equivale a "private" en Java).
  #identificador;
  #tipo;

  /**
 * @param {string} identificador Placa o código del vehículo.
 * @param {string} tipo CARRO | MOTO | BICICLETA (lo envía la subclase).
 */
constructor(identificador, tipo) {
    // new.target es la clase con la que se llamó "new".
    // Si es Vehiculo, alguien intentó instanciar la clase abstracta.
    if (new.target === Vehiculo) {
        throw new Error('Vehiculo es abstracta: crea un Carro, Moto o Bicicleta.');
    }
    this.#identificador = Vehiculo.normalizar(identificador);
    this.#tipo = tipo;
}

// --------- Getters (lectura controlada) ---------
get identificador() {
    return this.#identificador;
}

get tipo() {   
    return this.#tipo;
    }
    
    // --------- Métodos que las subclases DEBEN redefinir ---------
    
   /** Expresión regular que valida el identificador. */
   patronIdentificador() {
       throw new Error('Método abstracto: la subclase debe implementar patronIdentificador()');
   }
   
   /** Texto de ayuda para el usuario (ej: "Formato ABC123"). */
   ayudaFormato() {
      throw new Error('Método abstracto: la subclase debe implementar ayudaFormato()');
   }
    
    /** Nombre del ícono (librería MaterialCommunityIcons) que representa al vehículo. */
    icono() {
        return 'help-circle-outline';
   }

  // ---------- Métodos comunes (heredados por todas las hijas) ----------

/**
 * Valida el identificador usando el patrón de la subclase.
 * @returns {{valido: boolean, mensaje: string}}
 */
validar() {
  if (!this.#identificador) {
    return { valido: false, mensaje: 'El identificador es obligatorio.' };
  }
  if (!this.patronIdentificador().test(this.#identificador)) {
    return { valido: false, mensaje: `Formato inválido. ${this.ayudaFormato()}` };
  }
  return { valido: true, mensaje: '' };
}

/** Descripción legible, útil en listas y tickets. */
descripcion() {
  return `${this.tipo} * ${this.#identificador}`;
}

/**
 * Método ESTÁTICO: pertenece a la clase, no al objeto.
 * Se llamaría así: Vehiculo.normalizar(' abc-123 ') → 'ABC123'
 */
static normalizar(texto) {
    return String(texto ?? '')
        .toUpperCase()
        .replace(/[\s-]/g, ''); // quita espacios y guiones
}
};