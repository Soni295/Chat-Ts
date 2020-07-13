import React, { useState } from "react";

import { CajaMensajes } from "./CajaMensajes";
import { Usuarios } from "./Usuarios";
import { CajaTexto } from "./CajaTexto";

import { datos } from "./Conexiones"; //Luego quitarlos

const usuario = "Juan";
const Chat = (): JSX.Element => {
  const [datosDelchat, setDatosDelchat] = useState();
  return (
    <div id="chat">
      <div id="chat-usuarios-mensajes">
        <CajaMensajes usuario={usuario} datosMensajes={datos} />
        <Usuarios datosMensajes={datos} />
      </div>
      <CajaTexto />
    </div>
  );
};

export { Chat };
