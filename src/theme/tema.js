/**
 * tema.js
 * --------------------------------------------------------
 * Paleta de colores, espaciados y tamaños de letra.
 * Si mañana el cliente pide "cambiar el azul por verde",
 * se cambia aquí y toda la app se actualiza.
 */

export const colores = {
  primario: '#1E4FD8',
  primarioOscuro: '#163BA3',
  secundario: '#0F172A',
  fondo: '#F4F6FB',
  superficie: '#FFFFFF',
  borde: '#E2E8F0',
  texto: '#0F172A',
  textoSuave: '#64748B',
  textoInverso: '#FFFFFF',
  libre: '#16A34A', // celda disponible
  libreFondo: '#DCFCE7',
  ocupado: '#DC2626', // celda ocupada
  ocupadoFondo: '#FEE2E2',
  advertencia: '#D97706',
  peligro: '#DC2626',
};

export const espacio = {
    xs: 4,
    s: 8,
    m:12,
    l: 16,
    xl: 24,
    xxl: 32,
};

export const tipografia ={
    pequeña: 12,
    normal: 15,
    subtitulo: 18,
    titulo: 24,
    grande: 32,
};

export const radio = {
    s: 8,
    m: 12,
    l: 20,
};

// Sombra suave reutilizable para tarjetas (Android usa "elevation").
export const sombra = {
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
};

