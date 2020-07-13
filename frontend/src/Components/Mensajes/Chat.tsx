import React from "react";
import { CajaMensajes } from "./CajaMensajes";
import { Usuarios } from "./Usuarios";
import { CajaTexto } from "./CajaTexto";

import { datos } from "./Conexiones"; //Luego quitarlos

const usuario = "Juan";
const Chat = (): JSX.Element => {
  return (
    <div>
      <div>
        <div>
          <CajaMensajes usuario={usuario} datosMensajes={datos} />
        </div>
        <div>
          <Usuarios datosMensajes={datos} />
        </div>
      </div>
      <CajaTexto />
    </div>
  );
};

export { Chat };
