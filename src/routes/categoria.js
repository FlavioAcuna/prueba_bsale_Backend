import { Router } from "express";
import { methods } from "./../controllers/categoria.controller";
const router = Router();

router.get("/categorias",methods.getCategorias)
router.get("/categorias/:id",methods.filterCategorias)

export default router;
