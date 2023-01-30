import mongoose, { Schema } from "mongoose";

const categoriaTienda = new Schema({
  nombre_categoria: { type: String },
  subtitulo: { type: String },
  imagen: { type: String },
});

const categoriaTiendas = mongoose.model("categoriatiendas", categoriaTienda);
export default categoriaTiendas;
