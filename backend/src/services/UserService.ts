import User from "../entities/User";
import db from "../database/connection";
import Knex from "knex";

export default {
  async insertUser(obj: User, trx?: Knex.Transaction) : Promise<number> {
    const [id] = trx ? await trx('users').insert(obj) : await db('users').insert(obj) 

    return id
  }
}