"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var CtrlRoute_1 = require("./routes/CtrlRoute");
var body_parser_1 = require("body-parser");
//Server
var app = express_1.default();
//Middlewares
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("", CtrlRoute_1.router);
app.listen(constants_1.PORT, function () {
    console.log("El server se ejecuta en el puerto:" + constants_1.PORT);
});
