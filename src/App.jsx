import { useEffect, useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalAPagar } from "./helpers/index";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalAPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [total]);

  const MAX = 20000;
  const MIN = 0;
  const STEP = 100;

  const handleChange = (e) => {
    setCantidad(+e.target.value);
  };

  const handleClickDecremento = () => {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert("El valor no puede ser menor a 0");
      return;
    }

    setCantidad(valor);
  };

  const handleClickIncremento = () => {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert("El valor no puede ser mayor a 20000");
      return;
    }

    setCantidad(valor);
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex  justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 rounded-lg appearance-none"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-4xl font-extrabold text-center text-gray-800">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-bold text-center text-gray-500">
        Elige un <span className="text-indigo-500">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border-2 border-gray-300 rounded-lg text-center text-xl font-bold"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="24">24</option>
      </select>
      <div className="my-5 flex flex-col space-y-3 bg-gray-100 p-5 justify-center items-center">
        <h2 className="text-2xl font-bold text-center text-gray-500">
          Resumen <span className="text-indigo-500">de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(pago)} Mensuales
        </p>
      </div>
      <p className="text-center"> 
        Trabajo realizado por <a href="https://www.linkedin.com/in/maurojoseciappina/"> <span className="text-indigo-500"> Mauroo Ciappina </span></a>.  
      </p>
    </div>
  );
}

export default App;
