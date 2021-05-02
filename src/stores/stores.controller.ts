import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store } from './store.model';

@Controller('stores')
export class StoresController {
  constructor(private readonly storeService: StoresService) { }

  @Get()
  async getStores(): Promise<Store[] | null> {
    return await this.storeService.findAll();
  }

  @Get(':id')
  async getUser(@Param() user: { id: string }) {
    return await this.storeService.findOne(user.id);
  }

  @Post()
  async create(@Body() store: Store): Promise<Store> {
    return await this.storeService.create(store);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user) {
    return await this.storeService.update(id, user);
  }
}
