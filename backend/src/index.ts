import express from "express";
import { PORT } from "./config/constants";
import { router } from "./routes/CtrlRoute";
import { urlencoded } from "body-parser";

//Server
const app: any = express();

//Middlewares
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use("", router);

app.listen(PORT, () => {
  console.log(`El server se ejecuta en el puerto:${PORT}`);
});
