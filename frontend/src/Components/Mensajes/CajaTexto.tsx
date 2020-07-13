import React from "react";

import { useState } from "react";

type FormElement = React.FormEvent<HTMLFontElement>;

export const CajaTexto = (): JSX.Element => {
  const [texto, setTexto] = useState<string>("");

  const actualizarTextos = (e: FormElement) => {
    e.preventDefault();
    alert(texto);
  };

  return (
    <form onSubmit={(e: any) => actualizarTextos(e)}>
      <input
        onChange={(e) => setTexto(e.target.value)}
        type="text"
        value={texto}
      />
      <button>Enviar</button>
    </form>
  );
};
