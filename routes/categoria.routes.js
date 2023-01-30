import routerx from "express-promise-router";
import categoriaController from "../controllers/categoria.controller";

const router = routerx();

router.post("/insertar", categoriaController.categoriaTienda);
router.get("/consultar", categoriaController.consultar);
router.get("/consultar/:id", categoriaController.consultarUno);
router.delete("/eliminar/:id", categoriaController.eliminar);
router.put("/actualizar/:id", categoriaController.actualizarcategorias);

/* router.post('/guardarPersonal',personalController.GuardarPersonal);
router.get('/consultarPersonal',personalController.listarPersonal);
router.get('/consultarUno/:id', personalController.personalUno);
router.delete('/eliminarPersonal/:id',personalController.eliminarPersonal);
router.put('/actualizarPersonal/:id',personalController.actualizarPersonal); */

export default router;
