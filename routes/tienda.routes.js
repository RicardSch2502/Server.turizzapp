import routerx from "express-promise-router";
import tiendaController from "../controllers/tienda.controller";

const router = routerx();

router.post("/insertar", tiendaController.guardar);
//router.post("/subirimg/:idtienda", tiendaController.GuardarImagen);
router.get("/consultar", tiendaController.consultar);
router.get("/consultar/:id", tiendaController.obtener);
router.get("/consultarUno/:id", tiendaController.consultarUno);
router.delete("/eliminar/:id", tiendaController.eliminar);
router.put("/actualizar/:id", tiendaController.actualizar);

export default router;
