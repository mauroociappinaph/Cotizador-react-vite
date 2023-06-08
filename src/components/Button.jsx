import React from "react";
function Button({ operador, fn }) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:right-2 hover:ring-of hover:bg-lime-600"
      onClick={fn}
    >
      {operador}
    </button>
  );
}

export default Button;
