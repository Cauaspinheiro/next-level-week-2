import Knex from 'knex'
import db from '../database/connection'

export default {
  async insertConnection(user_id: string, trx?: Knex.Transaction) {
    const [id] = trx
      ? await trx('connections').insert({ user_id })
      : await db('connections').insert({ user_id })

    return id
  },

  async getTotalConnections(trx?: Knex.Transaction) {
    const totalConnections = trx
      ? await trx('connections').count('* as total')
      : await db('connections').count('* as total')

    return totalConnections
  },
}
