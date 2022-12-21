export const formatearCantidad = cantidad => {
  return Number(cantidad).toLocaleString('es-PY', {
    style: 'currency',
    currency: 'PYG',
  });
};
