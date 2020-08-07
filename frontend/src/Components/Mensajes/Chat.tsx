import React, { useEffect } from "react";

import { CajaMensajes } from "./CajaMensajes";
import { Usuarios } from "./Usuarios";
import { CajaTexto } from "./CajaTexto";

import { datos } from "./Conexiones"; //Luego quitarlos

import { Redirect } from "react-router-dom";

const Chat = (props: { usuario: string }): JSX.Element => {
  //  const [datosDelchat, setDatosDelchat] = useState<string>("");
  useEffect(() => {
    console.log();
  }, []);

  if (props.usuario) return <Redirect to="/" />;

  return (
    <div id="chat">
      <div id="chat-usuarios-mensajes">
        <CajaMensajes usuario={props.usuario} datosMensajes={datos} />
        <Usuarios datosMensajes={datos} />
      </div>
      <CajaTexto />
    </div>
  );
};

export { Chat };
