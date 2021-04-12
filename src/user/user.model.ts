
import { prop, Ref } from '@typegoose/typegoose';
import { IsEmail, IsPhoneNumber, IsString, IsNotEmpty, IsArray } from 'class-validator';
import { Store } from 'src/stores/store.model';

export class User {
  @IsString()
  @prop({ required: false })
  public name?: string;

  @IsNotEmpty({
    message: 'password can not empty'
  })
  @IsString()
  @prop({ required: true })
  public password: string;

  @IsNotEmpty({
    message: 'email can not empty'
  })
  @IsEmail()
  @prop({ required: true })
  public email: string;

  @IsPhoneNumber()
  @prop({ required: false })
  public phone?: string;

  @prop({ required: true, default: [] })
  public stores: Ref<Store>[];
}