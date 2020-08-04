import { Router } from "express";

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to Proffy!!', 
    created_by: 'https://github.com/Cauaspinheiro'
  })
})

export default routes