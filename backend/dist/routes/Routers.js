"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.chat = exports.index = void 0;
var usuarios = [];
function index(req, res) {
    res.json({ a: "a" });
}
exports.index = index;
function chat(req, res) {
    var _a = req.body, user = _a.user, room = _a.room;
    res.json(req.body);
}
exports.chat = chat;
function user(req, res) {
    var user = req.body.user;
    user === '' || user === ' ' ?
        res.json({ user: user, msg: 'Error' }) :
        res.json({ user: user, msg: 'Ok' });
}
exports.user = user;
