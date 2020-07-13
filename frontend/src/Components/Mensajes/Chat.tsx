import React from "react";
import { CajaMensajes } from "./CajaMensajes";
import { Usuarios } from "./Usuarios";
import { CajaTexto } from "./CajaTexto";

import { datos } from "./Conexiones"; //Luego quitarlos

const usuario = "Juan";
const Chat = (): JSX.Element => {
  return (
    <div>
      <div id="chat">
        <CajaMensajes usuario={usuario} datosMensajes={datos} />
        <Usuarios datosMensajes={datos} />
      </div>
      <CajaTexto />
    </div>
  );
};

export { Chat };
