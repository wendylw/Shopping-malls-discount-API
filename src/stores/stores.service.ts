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

  async findOne(id: string) {
    return await this.storeModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Store[] | null> {
    return await this.storeModel.find().exec();
  }

  async update(id: string, updateUserDto) {
    return await this.storeModel.findOneAndUpdate({ _id: id }, updateUserDto);
  }
}
