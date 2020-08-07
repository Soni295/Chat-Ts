import { Router } from "express";
import { index, chat } from "./Routers";

const router = Router();

router
  .get("/", index)
  .get("/Chat/:sala", index)
  .post("/User", index)
  .delete("/", index)
  .get("/chat", chat)
  .post("/chat", chat)
  .delete("/chat", chat);

export { router };

/*

data = {
  user:'Juan',
  room:'1'
}

metodo = {
  method: 'POST',
  body:JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}
fetch('http://localhost:4000', metodo)
.then(r => r.json())
.then(data => console.log(data))
*/
