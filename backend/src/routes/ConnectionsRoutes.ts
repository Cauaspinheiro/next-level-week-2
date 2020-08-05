import { Router } from "express";
import ConnectionsController from "../controllers/ConnectionsController";

const routes = Router()

routes.get('/connections', ConnectionsController.index)
routes.post('/connections', ConnectionsController.create)

export default routes