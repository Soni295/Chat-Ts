"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Routers_1 = require("./Routers");
var router = express_1.Router();
exports.router = router;
router
    .get("/", Routers_1.index)
    .get("/Chat/:sala", Routers_1.index)
    .post("/User", Routers_1.index)
    .delete("/", Routers_1.index)
    .get("/chat", Routers_1.chat)
    .post("/chat", Routers_1.chat)
    .delete("/chat", Routers_1.chat);
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
