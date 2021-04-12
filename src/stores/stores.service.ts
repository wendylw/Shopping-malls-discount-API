import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Store } from '../stores/store.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class StoresService {
  constructor(
    @InjectModel(Store) private readonly storeModel: ReturnModelType<typeof Store>
  ) { }

  async create(createStoreDto: { name: string, address: string }): Promise<Store> {
    return await this.storeModel.create(createStoreDto);
  }

  async findAll(): Promise<Store[] | null> {
    return await this.storeModel.find().exec();
  }
}
