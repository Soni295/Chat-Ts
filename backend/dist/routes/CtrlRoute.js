"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Routers_1 = require("./Routers");
var router = express_1.Router();
exports.router = router;
router.get("/", Routers_1.index);
router.post("/chat", Routers_1.chat);
