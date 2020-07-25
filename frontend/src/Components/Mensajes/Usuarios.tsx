import React from "react";

type AO = Array<any>;
interface mensaje {
  usuario: string;
  mensaje: string;
  chat: string;
  nMensaje: number;
}

const selecUsuario = () => {
  alert("Hola");
};
const Usuarios = (props: { datosMensajes: AO }): JSX.Element => {
  return (
    <div id="lista-usuarios">
      {props.datosMensajes.map((m: mensaje, indice: number) => {
        return (
          <div key={indice} onClick={selecUsuario}>
            {m.usuario}
          </div>
        );
      })}
    </div>
  );
};

export { Usuarios };
