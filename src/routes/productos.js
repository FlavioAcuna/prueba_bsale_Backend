import {Router} from "express";
import { methods as productosController} from "./../controllers/productos.controller";
const router=Router()

router.use("/",productosController.getProductos);

export default router