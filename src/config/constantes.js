// Tipos de vehículo que acepta el parqueadero.
// Se usan como texto en la base de datos (columna "tipo").
export const TIPOS_VEHICULO = Object.freeze({
  CARRO: 'CARRO',
  MOTO: 'MOTO',
  BICICLETA: 'BICICLETA',
});

// Estados posibles de un ticket.
export const ESTADOS_TICKET = Object.freeze({
  ACTIVO: 'ACTIVO', // el vehículo está dentro del parqueadero
  CERRADO: 'CERRADO', // el vehículo ya salió y pagó
});

// Cantidad de celdas que se crean la primera vez que se abre la app.
export const CAPACIDAD_INICIAL = Object.freeze({
  CARRO: 20,
  MOTO: 15,
  BICICLETA: 10,
});

// Prefijo del código de cada celda: C-01, M-01, B-01...
export const PREFIJO_ESPACIO = Object.freeze({
  CARRO: 'C',
  MOTO: 'M',
  BICICLETA: 'B',
});

// Tarifas por defecto en pesos colombianos (COP).
// El administrador puede cambiarlas desde la pantalla Tarifas.
export const TARIFAS_POR_DEFECTO = Object.freeze({
  CARRO: { valorHora: 3000, valorDia: 25000, minutosGracia: 5 },
  MOTO: { valorHora: 1500, valorDia: 12000, minutosGracia: 5 },
  BICICLETA: { valorHora: 500, valorDia: 3000, minutosGracia: 10 },
});

// Nombre del archivo de base de datos SQLite dentro del teléfono.
export const NOMBRE_BASE_DATOS = 'parkapp.db';

// Constantes de tiempo para no escribir 60 * 1000 en todas partes.
export const MS_POR_MINUTO = 60 * 1000;
export const MINUTOS_POR_HORA = 60;
export const MINUTOS_POR_DIA = 24 * 60;