import {Router} from "express";
import { methods} from "./../controllers/productos.controller";
const router=Router()

router.get("/productos",methods.getProductos)
router.get("/productos/:name",methods.filterProductos)

export default router