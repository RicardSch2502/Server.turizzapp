import routerx from "express-promise-router";
import Usuariocontroller from "../controllers/Usuario.controller";

const router = routerx();

router.post("/insertar", Usuariocontroller.guardar);
router.post("/login", Usuariocontroller.buscarUsuario);

export default router;