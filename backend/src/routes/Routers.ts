import { request, response } from "express";
abstract class Line {
  get(req: typeof request, res: typeof response): void {}
  post(req: typeof request, res: typeof response): void {}
  update(req: typeof request, res: typeof response): void {}
  delet(req: typeof request, res: typeof response): void {}
}

class Mensaje extends Line {
  get(req: typeof request, res: typeof response) {
    let peticion: string = "";
  }
}
export function index(req: typeof request, res: typeof response) {
  res.send("hello World");
}

export function chat(req: typeof request, res: typeof response) {
  const user: string = req.body.NameUser;
  const chat: string = req.body.IdChat;
  console.log(req.body);
  res.send([user, chat]);
}
