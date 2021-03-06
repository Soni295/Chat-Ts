import express from "express";
import { PORT } from "./config/constants";
import { router } from "./routes/CtrlRoute";
import { urlencoded } from "body-parser";
const cors:Function = require("cors")

//Server
const app: any = express();

//Middlewares
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
  allowedHeaders: ["Content-Type"],
  })
);
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use("", router);

app.listen(PORT, () => {
  console.log(`El server se ejecuta en: http://localhost:${PORT}`)
});
