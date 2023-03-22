import routerx from "express-promise-router";
import categoriaRoutes from "./categoria.routes";
import tiendaRoutes from "./tienda.routes";
import usuarioRoutes from "./Usuario.ruta";
const router = routerx();

router.use("/categoria", categoriaRoutes);
router.use("/tienda", tiendaRoutes);
router.use("/usuario", usuarioRoutes);

export default router;
