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
const Usuarios = (props: { datosMensajes: AO }) => {
  return (
    <>
      {props.datosMensajes.map((m: mensaje, indice: number) => {
        return (
          <div key={indice} onClick={selecUsuario}>
            {m.usuario}
          </div>
        );
      })}
    </>
  );
};

export { Usuarios };
