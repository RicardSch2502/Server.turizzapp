import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./routes";

//conexion a la base de datos mongodb
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://127.0.0.1:27017/turizzapp";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((mongoose) => console.log("Conectado a la BD en el puerto 27017"))
  .catch((err) => console.log(err));
  mongoose.set('strictQuery', true);

const app = express();
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.listen(app.get("port"), () => {
  console.log("Servidor HTTP corriendo en el puerto: " + app.get("port"));
});
