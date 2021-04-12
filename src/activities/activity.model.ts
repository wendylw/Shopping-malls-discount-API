import { prop } from '@typegoose/typegoose';
import { IsString, IsDate } from 'class-validator';

enum ActivityStrategy { Free = 1, Discount = 2, Promotion = 3, Reduction = 4 }

export class Info {
  @prop({ required: true })
  strategy: ActivityStrategy

  @prop({ required: true })
  description: string
}

export class Activity {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsDate()
  @prop({ required: true })
  startDate: Date;

  @IsDate()
  @prop({ required: true })
  endDate: Date;

  @prop({ required: true })
  infos: Info[]
}