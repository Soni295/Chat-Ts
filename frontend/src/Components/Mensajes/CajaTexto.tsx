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
    <form id="formulario-chat" onSubmit={(e: any) => actualizarTextos(e)}>
      <textarea
        autoFocus
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
      />
      <button>Enviar</button>
    </form>
  );
};
