import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store } from './store.model';

@Controller('stores')
export class StoresController {
  constructor(private readonly storeService: StoresService) { }

  @Get()
  async getStores(): Promise<Store[] | null> {
    return await this.storeService.findAll();
  }

  @Post()
  async create(@Body() store: Store): Promise<Store> {
    return await this.storeService.create(store);
  }
}
