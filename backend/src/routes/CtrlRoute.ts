import { Router } from "express";
import { index, chat } from "./Routers";

const router = Router();

router
  .get("/", index)
  .post("/", index)
  .delete("/", index)
  .get("/chat", chat)
  .post("/chat", chat)
  .delete("/chat", chat);

export { router };
