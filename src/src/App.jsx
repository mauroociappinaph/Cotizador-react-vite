import { useState } from "react";

import Header from "./components/Header";

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
        <button
          type="button"
          onClick={handleClickDecremento}
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:right-2 hover:ring-of hover:bg-lime-600"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleClickIncremento}
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:right-2 hover:ring-of hover:bg-lime-600"
        >
          +
        </button>
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
        {cantidad}
      </p>
    </div>
  );
}

export default App;
