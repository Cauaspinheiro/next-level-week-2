import { Request, Response } from 'express';
import UserService from '../services/UserService';
import ClassService from '../services/ClassService';
import Class, { Schedule } from '../entities/Class';
import User from '../entities/User';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import db from '../database/connection';
import { Filters } from '../services/ClassService'

export default {
  async index(req: Request, res: Response) {
    const filters = req.query as unknown as Filters

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search'
      })
    }

    const timeInMinutes = convertHourToMinutes(filters.time)
  
    const classes = await ClassService.getFilteredClasses({...filters, timeInMinutes})

    return res.status(200).json(classes)
  },

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio }: User = req.body;
    const { subject, cost }: Class = req.body;
    const { schedule }: { schedule: Schedule[] } = req.body;

    const trx = await db.transaction();

    try {
      const userId = await UserService.insertUser(
        { name, avatar, whatsapp, bio },
        trx
      );

      const classId = await ClassService.insertClass(
        { subject, cost, user_id: userId },
        trx
      );

      const classSchedule = schedule.map((item) => {
        return {
          class_id: classId,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to),
        };
      });

      await ClassService.insertClassSchedule(classSchedule, trx);

      await trx.commit();

      return res.status(201).json({
        user_id: userId,
        class_id: classId
      });
    } catch (error) {
      await trx.rollback()

      console.log(error)

      return res.status(400).json({
        error
      })
    }
  },
};
