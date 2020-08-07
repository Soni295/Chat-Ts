"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = exports.index = void 0;
function index(req, res) {
    res.send("hello World");
}
exports.index = index;
function chat(req, res) {
    var _a = req.body, user = _a.user, room = _a.room;
    res.json(req.body);
}
exports.chat = chat;
