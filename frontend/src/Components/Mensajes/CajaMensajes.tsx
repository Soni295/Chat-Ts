import React from "react";

type AO = Array<any>;

interface mensaje {
  usuario: string;
  mensaje: string;
  chat: string;
  nMensaje: number;
}

export const CajaMensajes = (props: {
  datosMensajes: AO;
  usuario: string;
}): JSX.Element => {
  return (
    <>
      {props.datosMensajes.map((m: mensaje, indice: number) => {
        if (m.usuario === props.usuario) {
          return <div key={indice}>{m.mensaje}</div>;
        } else {
          return <div key={indice}>{m.mensaje}</div>;
        }
      })}
    </>
  );
};
