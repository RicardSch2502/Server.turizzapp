import routerx from "express-promise-router";
import categoriaRoutes from "./categoria.routes";
import tiendaRoutes from "./tienda.routes";
const router = routerx();

router.use("/categoria", categoriaRoutes);
router.use("/tienda", tiendaRoutes);

export default router;
