import HomeService from '../service/home-service';
import { Context } from 'koa';
export default class HomeController {
  static async hello(ctx:Context) {
    const res = await HomeService.hello(ctx);
    ctx.body = res
  }
}
