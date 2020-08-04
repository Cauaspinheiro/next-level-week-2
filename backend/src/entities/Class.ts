export interface Schedule {
  week_day: number, from: string, to: string
}

export default class Class {
  user_id : number

  subject : string
  cost : string
  schedule : Schedule[]
  
  constructor(obj: Class) {
    this.user_id = obj.user_id
    this.subject = obj.subject
    this.cost = obj.cost
    this.schedule = obj.schedule
  }
}