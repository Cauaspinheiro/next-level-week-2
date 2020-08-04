export default class User {
    name : string
    avatar : string
    whatsapp : number
    bio : string

    constructor(obj : User) {
      this.name = obj.name
      this.avatar = obj.avatar
      this.whatsapp = obj.whatsapp
      this.bio = obj.bio
    }
}