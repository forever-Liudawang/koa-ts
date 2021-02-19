import { Context } from 'koa';
import UserModel from '../entity/User'
export default class HomeService {
  static async hello(ctx:Context) {
    console.log(ctx.query,'query')
    // await UserModel.create({name:100,age:10})
    return 123
  }
}
