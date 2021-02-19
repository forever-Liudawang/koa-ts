import PostService from "../service/Post"
import { Context } from 'koa';
export default class PostController {
//   static async createUser(ctx:Context) {
//     const res = await UserService.createUser(ctx);
//     ctx.body = res
//   }
    static async createPost(ctx:Context){
        const res = await PostService.createPost(ctx)
        ctx.body = res
    }
    static async getPosts(ctx:Context){
        const res = await PostService.getPosts(ctx)
        ctx.body = res
    }
}