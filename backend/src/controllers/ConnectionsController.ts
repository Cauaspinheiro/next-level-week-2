import { Response, Request } from 'express'
import ConnectionsService from '../services/ConnectionsService.'

export default {
  async index(req: Request, res: Response) {
    const totalConnections = await ConnectionsService.getTotalConnections()

    const { total } = totalConnections[0]

    return res.json({ total })
  },

  async create(req: Request, res: Response) {
    const { user_id }: { user_id: string } = req.body

    await ConnectionsService.insertConnection(user_id)

    return res.status(201).json()
  },
}
