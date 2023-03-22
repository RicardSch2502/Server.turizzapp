import mongoose, { Schema } from "mongoose";

const usuario = new Schema({
  usuario: { type: String },
  contrasena: { type: String },
  correo: { type: String },
  nombre: { type: String },
  edad: {type: Number},
  rol:{type:String}
});

const usuariosm = mongoose.model("usuarios", usuario);
export default usuariosm;