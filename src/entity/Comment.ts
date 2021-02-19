import { prop, getModelForClass } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose'
import { Model } from '../types/types';
class Comment extends Typegoose{
  @prop()
  public post_id: string;

  @prop()
  public user_id: string;

  @prop()
  public userName: string;

  @prop()
  public content: string;
}
const CommentModel:Model= getModelForClass(Comment,{schemaOptions:{timestamps: true}});
export default CommentModel
export {Comment}
