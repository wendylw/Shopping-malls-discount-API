import { prop } from '@typegoose/typegoose';
import { IsString, IsMilitaryTime } from 'class-validator';

export class Mall {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop({ required: true })
  address: string;

  @IsMilitaryTime()
  @prop({ required: true, default: '00:00' })
  openTime: string

  @IsMilitaryTime()
  @prop({ required: true, default: '00:00' })
  closeTime: string

  @prop({ required: true })
  parkingInfo: string
}