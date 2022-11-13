import {Router} from "express";
import { methods} from "./../controllers/productos.controller.js";
const router=Router()
//rutas 
router.get("/productos",methods.getProductos)
router.get("/productos/:name",methods.filterProductos)

export default router