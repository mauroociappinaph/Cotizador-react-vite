const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(valor);
};

const calcularTotalAPagar = (cantidad, plazo) => {
  let total;
  //NOTE - Mientras mayor la cantidad menor el interés.
  if (cantidad < 5000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 10000 && cantidad < 20000) {
    total = cantidad * 1.3;
  } else if (cantidad >= 20000) {
    total = cantidad * 1.2;
  } else {
    total = cantidad * 1.1;
  }

  //NOTE - Plazo , mayor plazo mas interés.
  if (plazo === 6) {
    total *= 1.2;
  } else if (plazo === 12) {
    total *= 1.3;
  } else if (plazo === 18) {
    total *= 1.4;
  } else if (plazo === 24) {
    total *= 1.5;
  }
  return total;
};
export { formatearDinero, calcularTotalAPagar };
