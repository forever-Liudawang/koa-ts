import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose'
import { Model } from '../types/types';
import {User} from './User'
class Post extends Typegoose{
  @prop()
  public title:string

  @prop()
  public content:string

  @prop() 
  public media: Array<string>

  @prop()
  public user_id:string

  @prop() 
  public user_info:Object
  
  @prop()
  public cate_id: string

}
const PostModel:Model= getModelForClass(Post,{schemaOptions:{timestamps: true}});
export default PostModel
