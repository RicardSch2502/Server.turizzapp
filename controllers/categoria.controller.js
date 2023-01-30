import { model } from "mongoose";
import models from "../models";

export default {
  //GUARDAR DATOS EN LA BASE DE DATOS//
  categoriaTienda: async (req, res, next) => {
    try {
      const { nombre_categoria, subtitulo, imagen } = req.body;

      const categoria = models.categoriaTiendas({
        nombre_categoria,
        subtitulo,
        imagen,
      });

      const registro = await categoria.save();
      res.status(200).json(registro);
    } catch (err) {
      res.status(500).send({
        mensage: "Ocurrio un error en la base de datos",
      });
    }
  },

  //CONSULTAR PERSONAL EN LA BASE DE DATOS//
  consultar: async (req, res, next) => {
    try {
      const consultar = await models.categoriaTiendas.find({});
      res.status(200).json(consultar);
    } catch (error) {
      res.status(400).send({
        mensage: "no pudo obtener los datos",
      });
    }
  },

  //ELIMINAR DATOS EN LA BASE DE DATOS//
  eliminar: async (req, res, next) => {
    try {
      const eliminarTien = await models.nTienda.deleteMany({
        id_categoria: req.params.id,
      });
      const eliminar = await models.categoriaTiendas.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json(eliminar);
    } catch (err) {
      res.status(404).send({
        mensage: "ocurrio un error",
      });
    }
  },

  //ACTUALIZAR DATOS EN LA BASE DE  DATOS//
  actualizarcategorias: async (req, res, next) => {
    try {
      const { nombre_categoria, subtitulo, imagen } = req.body;

      const Acategorias = {
        nombre_categoria,
        subtitulo,
        imagen,
      };

      const actualizar = await models.categoriaTiendas.findByIdAndUpdate(
        req.params.id,
        Acategorias
      );
      res.status(200).json(actualizar);
    } catch (error) {
      res.status(500).send({
        mensage: "ocurrio un error al actualizar la informacion",
      });
    }
  },

  consultarUno: async (req, res, next) => {
    try {
      const consultarUno = await models.categoriaTiendas.findById(
        req.params.id
      );
      res.status(200).json(consultarUno);
    } catch (error) {
      res.status(500).send({
        mensage: "Error en el servidor de la BD",
      });
    }
  },
};
