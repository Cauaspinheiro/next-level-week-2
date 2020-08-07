export default class Teacher {
  id: number
  subject: string
  cost: number
  name: string
  avatar: string
  whatsapp: string
  bio: string

  constructor(obj: Teacher) {
    this.id = obj.id
    this.subject = obj.subject
    this.cost = obj.cost
    this.name = obj.name
    this.avatar = obj.avatar
    this.whatsapp = obj.whatsapp
    this.bio = obj.bio
  }
}
