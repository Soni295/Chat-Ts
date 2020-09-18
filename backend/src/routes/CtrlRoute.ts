import { Router } from "express";
import { index, user, chat } from "./Routers";

const router = Router();

router
  .get("/", index)
  .get("/Chat", index)
  .post("/User", user)
  .put("/User", index)
  .delete("/User", index)

export { router };
