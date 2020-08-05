import { Router } from "express";
import classesRoutes from './ClassRoutes'
import ConnectionsRoutes from './ConnectionsRoutes'

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to Proffy!!', 
    created_by: 'https://github.com/Cauaspinheiro'
  })
})

routes.use(classesRoutes)
routes.use(ConnectionsRoutes)

export default routes