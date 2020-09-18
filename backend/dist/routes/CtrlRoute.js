"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Routers_1 = require("./Routers");
var router = express_1.Router();
exports.router = router;
router
    .get("/", Routers_1.index)
    .get("/Chat", Routers_1.index)
    .post("/User", Routers_1.user)
    .put("/User", Routers_1.index)
    .delete("/User", Routers_1.index);
