"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var CtrlRoute_1 = require("./routes/CtrlRoute");
var body_parser_1 = require("body-parser");
var cors = require("cors");
//Server
var app = express_1.default();
//Middlewares
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type"],
}));
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("", CtrlRoute_1.router);
app.listen(constants_1.PORT, function () {
    console.log("El server se ejecuta en: http://localhost:" + constants_1.PORT);
});
