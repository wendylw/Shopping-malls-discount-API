import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { MallsService } from './malls.service';
import { Mall } from './mall.model';

@Controller('malls')
export class MallsController {
  constructor(private readonly mallsService: MallsService) { }

  @Get()
  async getMalls(): Promise<Mall[] | null> {
    return await this.mallsService.findAll();
  }

  @Post()
  async create(@Body() store: Mall): Promise<Mall> {
    return await this.mallsService.create(store);
  }
}
