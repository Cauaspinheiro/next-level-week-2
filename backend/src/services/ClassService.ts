import Class from '../entities/Class'
import db from '../database/connection'
import Knex from 'knex'

interface ScheduleDb {
  class_id: number
  week_day: number 
  from: number 
  to: number
}

export default {
  async insertClass(obj: Omit<Class, 'schedule'>, trx?: Knex.Transaction) : Promise<number> {
    const [id] = trx ? await trx('classes').insert(obj) : await db('classes').insert(obj)

    return id
  },
  async insertClassSchedule(schedules: ScheduleDb[], trx?: Knex.Transaction) {
   trx ? await trx('class_schedule').insert(schedules) : await db('class_schedule').insert(schedules)
  }
}