import { Context } from 'koa';
import UserModel from '../entity/User'
export default class UserService {
  static async createUser(ctx:Context) {
    const body = ctx.request.body
    const res = await UserModel.create(body)
    return res
  }
  static async updateUser(ctx:Context) {
    console.log(ctx.query,'query')
    const res = await UserModel.findOneAndUpdate(
      {'nickname':'200'},
      {nickname:'刘谋焰',avatar:'123'}
    )
    return res
  }
  static async getUserInfo(ctx:Context) {
    console.log(ctx.query,'query')
    const user = await UserModel.findById(ctx.query.user_id)
    return user
  }
  static async login(ctx:Context) {
    const {nickname,passWord} = ctx.request.body
    const res = await UserModel.find({nickname})
    if(res.length==0){
        return "用户名不存在"
    }else{
        const user = res[0]
        if(user.passWord != passWord){
            return "密码错误"
        }
    }
    return res
  }
}
