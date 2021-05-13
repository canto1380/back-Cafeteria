import { Router } from "express";
import cafeteriaCtrl from "../controllers/productos.controllers";

const router = Router();

router
  .route("/")
  .get(cafeteriaCtrl.listarProducto)
  .post(cafeteriaCtrl.nuevoProducto)

router
  .route('/:id')
  .delete(cafeteriaCtrl.eliminarProducto)
  .put(cafeteriaCtrl.editarProducto)
  .get(cafeteriaCtrl.obtenerProducto)
export default router;
