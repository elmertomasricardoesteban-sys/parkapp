/**
 * Ticket.js - CLASE de dominio
 * -------------------------------------------------
 * Un ticket es el "comprobante" que se genera cuando un vehículo
 * entra. Se cierra cuando el vehículo sale y paga.
 *
 * La base de datos devuelve filas con nombres en snake_case
 * (hora_entrada). Esta clase las convierte en un objeto con
 * nombres en camelCase (horaEntrada), que es el estilo de JavaScript.
 */
import { ESTADOS_TICKET, MS_POR_MINUTO } from '../config/constantes';

export default class Ticket {
  constructor({
    id = null,
    placa,
    tipo,
    espacioId,
    codigoEspacio = '',
    horaEntrada,
    horaSalida = null,
    minutos = null,
    valorPagado = null,
    estado = ESTADOS_TICKET.ACTIVO,
  }) {  
    this.id = id;
    this.placa = placa;
    this.tipo = tipo;
    this.espacioId = espacioId;
    this.codigoEspacio = codigoEspacio;
    this.horaEntrada = horaEntrada; // milisegundos desde 1970 (Date.now())
    this.horaSalida = horaSalida;
    this.minutos = minutos;
    this.valorPagado = valorPagado;
    this.estado = estado;
  }

   /**
   * "Constructor alternativo" (método de fábrica estático):
   * convierte una fila de SQLite en un objeto Ticket.
   */
  static desdeFila(fila) {
    return new Ticket({
      id: fila.id,
      placa: fila.placa,
      tipo: fila.tipo,
      espacioId: fila.espacio_id,
      codigoEspacio: fila.codigo_espacio ?? '',
      horaEntrada: fila.hora_entrada,
      horaSalida: fila.hora_salida,
      minutos: fila.minutos,
      valorPagado: fila.valor_pagado,
      estado: fila.estado,
    });
  }

  estaActivo() {
    return this.estado === ESTADOS_TICKET.ACTIVO;
  }

/**
   * Minutos que lleva (o llevó) el vehículo dentro.
   * Se cobra el minuto iniciado: 61 segundos = 2 minutos.
   * @param {number} ahora milisegundos; por defecto la hora actual.
   */
  minutosTranscurridos(ahora = Date.now()) {
    const fin = this.horaSalida ?? ahora;
    const diferencia = fin - this.horaEntrada;
    if (diferencia < 0) return 0; // no puede ser negativo
    return Math.ceil(diferencia / MS_POR_MINUTO);
  }
}