import { Router } from "express";
import { methods } from "./../controllers/categoria.controller";
const router = Router();

router.use("/", methods.getCategorias);
export default router ;