import Class from '../entities/Class'
import db from '../database/connection'
import Knex from 'knex'

interface ScheduleDb {
  class_id: number
  week_day: number
  from: number
  to: number
}

export interface Filters {
  week_day: number
  subject: string
  time: string
  timeInMinutes: number
}

export default {
  async insertClass(
    obj: Omit<Class, 'schedule'>,
    trx?: Knex.Transaction
  ): Promise<number> {
    const [id] = trx
      ? await trx('classes').insert(obj)
      : await db('classes').insert(obj)

    return id
  },

  async insertClassSchedule(schedules: ScheduleDb[], trx?: Knex.Transaction) {
    trx
      ? await trx('class_schedule').insert(schedules)
      : await db('class_schedule').insert(schedules)
  },

  async getFilteredClasses(
    filters: Filters,
    trx?: Knex.Transaction
  ): Promise<Class[]> {
    function query(knex: Knex) {
      return knex('classes')
        .whereExists(function () {
          this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [
              Number(filters.week_day),
            ])
            .whereRaw('`class_schedule`.`from` <= ??', [Number(filters.timeInMinutes)])
            .whereRaw('`class_schedule`.`to` > ??', [Number(filters.timeInMinutes)])
        })
        .where('classes.subject', '=', filters.subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])
    }

    if (trx) {
      return query(trx)
    } else {
      return query(db)
    }
  },
}
