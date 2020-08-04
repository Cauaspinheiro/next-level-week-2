import { Router } from "express";
import ClassesController from "../controllers/ClassController";

const routes = Router()

routes.post('/classes', ClassesController.create)

export default routes