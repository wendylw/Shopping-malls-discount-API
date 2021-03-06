import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.model';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) { }

  @Get()
  async getActivities(): Promise<Activity[] | null> {
    return await this.activitiesService.findAll();
  }

  @Post()
  async create(@Body() activitie: Activity): Promise<Activity> {
    return await this.activitiesService.create(activitie);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.activitiesService.delete(id);
  }
}
