import { useState } from "react";

import Header from "./components/Header";

function App() {

  //NOTE - Cantidad Inicial de dinero. Y su función cual lo modifica.
  const [cantidad, setCantidad] = useState(10000);

  //NOTE - Evento OnChange
  const handleChange = (e) => {
    console.log(+e.target.value);
  }

  return <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <input 
    type="range"
    className="w-full h-6 bg-slate-50 accent-lime-500 hover:accent-lime-600"
    onChange={handleChange}
    />
  </div>;
}

export default App;
