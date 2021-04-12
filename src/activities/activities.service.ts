import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Activity, Info } from './activity.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity) private readonly activityModel: ReturnModelType<typeof Activity>
  ) { }

  async create(createActivityDto: { name: string, startDate: Date, endDate: Date, infos: Info[] }): Promise<Activity> {
    return await this.activityModel.create(createActivityDto);
  }

  async findAll(): Promise<Activity[] | null> {
    return await this.activityModel.find().exec();
  }
}
