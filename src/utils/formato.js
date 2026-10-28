/**
 * formato.js - funciones puras de presentación
 *
 * "Función pura": recibe datos, devuelve un resultado y NO cambia
 * nada externo. Son fáciles de probar (ver __tests__/formato.test.js).
 */
import { MINUTOS_POR_HORA, MINUTOS_POR_DIA } from '../config/constantes';

/**
 * 25000 -> "$25.000"  (formato de pesos colombianos)
 * Se hace a mano con una expresión regular para que funcione
 * igual en cualquier teléfono, sin depender de Intl.
 */
export function formatearMoneda(valor) {
  const numero = Math.round(Number(valor) || 0);
  const signo = numero < 0 ? '-' : '';
  const conPuntos = Math.abs(numero)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
  return `${signo}$${conPuntos}`;           
}

/** Agrega un cero a la izquierda: 7 -> "07" */
function dosDigitos(n) {
  return String(n).padStart(2, '0');
}

/** 1727600000000 -> "29/09/2026" */
export function formatearFecha(ms) {
  const f = new Date(ms);
  return `${dosDigitos(f.getDate())}/${dosDigitos(f.getMonth() + 1)}/${f.getFullYear()}`;
}

/** 1727600000000 -> "14:05" (formato 24 horas) */

export function formatearHora(ms) {
  const f = new Date(ms);
  return `${dosDigitos(f.getHours())}:${dosDigitos(f.getMinutes())}`;
}

/** Fecha y hora juntas: "29/09/2026 14:05" */
export function formatearFechaHora(ms) {
  return `${formatearFecha(ms)} ${formatearHora(ms)}`;
}

/**
 * 135 -> "2 h 15 min"  -  1500 -> "1 d 1 h 0 min"  -  8 -> "8 min"
 */
export function formatearDuracion(minutosTotales) {
  const total = Math.max(0, Math.floor(minutosTotales || 0));
  const dias = Math.floor(total / MINUTOS_POR_DIA);
  const horas = Math.floor((total % MINUTOS_POR_DIA) / MINUTOS_POR_HORA);
  const minutos = total % MINUTOS_POR_HORA;

  if (dias > 0) return `${dias} d ${horas} h ${minutos} min`;
    if (horas > 0) return `${horas} h ${minutos} min`;
  return `${minutos} min`;
}

/**
 * Rango [inicio, fin) en milisegundos del día que contiene "ms".
 * Sirve para consultar "lo de hoy" en la base de datos.
 */
export function rangoDelDia(ms = Date.now()) {
  const inicio = new Date(ms);
  inicio.setHours(0, 0, 0, 0);
  const fin = new Date(inicio);
  fin.setDate(fin.getDate() + 1);
  return [inicio.getTime(), fin.getTime()];
}