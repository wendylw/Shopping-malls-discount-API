import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { Activity } from './activity.model';

@Module({
  imports: [TypegooseModule.forFeature([Activity])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService]
})
export class ActivitiesModule { }