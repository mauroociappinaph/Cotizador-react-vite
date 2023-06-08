import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers/index";

function App() {
  const [cantidad, setCantidad] = useState(10000);

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
      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickIncremento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-slate-50 accent-lime-500 hover:accent-lime-600"
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

      <select className="mt-5 w-full p-2 bg-white border-2 border-gray-300 rounded-lg text-center text-xl font-bold">
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="24">24</option>
      </select>
    </div>
  );
}

export default App;
