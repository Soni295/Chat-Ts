const datos: Array<Object> = [
  { usuario: "Morty", mensaje: "Hola Juan", nMensaje: 1, chat: "1" },
  { usuario: "Juan", mensaje: "Hola morty", nMensaje: 2, chat: "1" },
  { usuario: "Amanda", mensaje: "Buenos dias", nMensaje: 3, chat: "2" },
  { usuario: "Juan", mensaje: "Que se cuenta?", nMensaje: 4, chat: "2" },
  { usuario: "Julieta", mensaje: "Soy julieta", nMensaje: 5, chat: "3" },
  { usuario: "Juan", mensaje: "Julieta...?", nMensaje: 6, chat: "3" },
];

const chats = (emisor: string): void => {
  console.log("hola");
};
export { datos, chats };
