import React from "react";
function Header() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Cotizador
      </h1>
      <h2 className="text-2xl font-bold text-center text-gray-500">
        ¿Cuanto <span className="text-indigo-500"> dinero </span> necesitas?
      </h2>
    </>
  );
}

export default Header;
