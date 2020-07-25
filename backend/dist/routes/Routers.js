"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = exports.index = void 0;
function index(req, res) {
    res.send("hello World");
}
exports.index = index;
function chat(req, res) {
    var user = req.body.NameUser;
    var chat = req.body.IdChat;
    console.log(req.body);
    res.send([user, chat]);
}
exports.chat = chat;
