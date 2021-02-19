import { prop, getModelForClass } from '@typegoose/typegoose';
import { Typegoose } from 'typegoose'
import { Model } from '../types/types';
class User extends Typegoose{
  @prop()
  public nickname: string;

  @prop()
  public avatar: string;

  @prop()
  public passWord: string;

  @prop() 
  public sign:string
}
const UserModel:Model= getModelForClass(User,{schemaOptions:{timestamps: true}}); // UserModel is a regular Mongoose Model with correct types
export default UserModel
export {User}
