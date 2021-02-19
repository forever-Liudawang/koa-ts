import { Context } from 'koa';
import PostModel from '../../src/entity/Post'
export default class PostService {
    static async createPost(ctx:Context) {
        const res = await PostModel.create(ctx.request.body) 
        return res
    }
    static async getPosts(ctx:Context) {
        console.log(ctx.query,'query==>>>>')
        const res =await PostModel.find({cate_id: ctx.query.cate_id})
        return res
    }
}