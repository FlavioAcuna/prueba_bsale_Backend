import { Router } from "express";
import { methods } from "./../controllers/categoria.controller.js";
const router = Router();
//rutas 
router.get("/categorias",methods.getCategorias)
router.get("/categorias/:id",methods.filterCategorias)

export default router;
