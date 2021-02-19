import UserService from "../service/User"
import { Context } from 'koa';
export default class UserCrontroller {
  static async createUser(ctx:Context) {
    const res = await UserService.createUser(ctx);
    ctx.body = res
  }
  static async updateUser(ctx:Context) {
    const res = await UserService.updateUser(ctx);
    ctx.body = res
  }
  static async getUserInfo(ctx:Context) {
    const res = await UserService.getUserInfo(ctx)
    ctx.body = res
  }
  static async login(ctx:Context) {
    const res = await UserService.login(ctx)
    ctx.body = res
  }
}
