import routerx from "express-promise-router";
import Usuariocontroller from "../controllers/Usuario.controller";

const router = routerx();

router.post("/insertar", Usuariocontroller.guardar);

export default router;