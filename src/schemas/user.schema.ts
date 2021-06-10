import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
  @Prop({type: String})
  name: string;

  @Prop({type: Number})
  age: number;

  @Prop({type: String, required: true, allowNull: true, unique: true})
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);