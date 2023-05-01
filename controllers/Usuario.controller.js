import models from "../models";

export default {
  //GUARDAR DATOS EN LA BASE DE DATOS//
  guardar: async (req, res, next) => {
    try {
        console.log("hola");
      const {
        nombre,
        correo,
        usuario,
        contrasena,
        rol,
        edad,
      } = req.body;

      const tienda = models.usuariomodel({
        nombre,
        correo,
        usuario,
        contrasena,
        rol,
        edad,
      });

      const registro = await tienda.save();
      res.status(200).json(registro);
    } catch (err) {
      console.log(err)
      res.status(500).send({
        mensage: "Ocurrio un error en la base de datos",
      });
      console.log(err);
    }
  },
  buscarUsuario: async (req, res, next) => {
    try {
        console.log("hola");
      const {
        usuario,
        password,
      } = req.body;
      const user = await models.usuariomodel.find({usuario: usuario, contrasena: password}).exec()

      if(
        user.length < 1
      ){
        throw {msg:"el usuario no existe"}
      }

      
      res.status(200).json(user);
    } catch (err) {
      console.log(err)
      res.status(403).send({
        mensage: err.msg,
      });
      console.log(err);
    }
  },

  /*//CONSULTAR PERSONAL EN LA BASE DE DATOS//
  consultar: async (req, res, next) => {
    try {
      const consultar = await models.nTienda.find({});
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
      const eliminar = await models.nTienda.findByIdAndDelete(req.params.id);
      res.status(200).json(eliminar);
    } catch (err) {
      res.status(404).send({
        mensage: "ocurrio un error",
      });
    }
  },

  //ACTUALIZAR DATOS EN LA BASE DE  DATOS//
  actualizar: async (req, res, next) => {
    try {
      const {
        nombre,
        descripcion,
        calle,
        estado,
        municipio,
        colonia,
        codigoPostal,
        id_categoria,
        categoria,
        imagen,
        color,
      } = req.body;

      const tienda = {
        nombre,
        calle,
        descripcion,
        estado,
        municipio,
        colonia,
        codigoPostal,
        id_categoria,
        categoria,
        imagen,
        color,
      };

      const actualizar = await models.nTienda.findByIdAndUpdate(
        req.params.id,
        tienda
      );
      res.status(200).json(actualizar);
    } catch (error) {
      res.status(500).send({
        mensage: "ocurrio un error al actualizar la informacion",
      });
    }
  },
  //CONSULTAR UNO//
  consultarUno: async (req, res, next) => {
    try {
      const consultarUno = await models.nTienda.find({
        id_categoria: req.params.id,
      });
      res.status(200).json(consultarUno);
    } catch (error) {
      res.status(500).send({
        mensage: "Error en el servidor de la BD",
      });
    }
  },
  obtener: async (req, res, next) => {
    try {
      const consultarUno = await models.nTienda.findById(req.params.id);
      res.status(200).json(consultarUno);
    } catch (error) {
      res.status(500).send({
        mensage: "Error en el servidor de la BD",
      });
    }
  },*/
};
