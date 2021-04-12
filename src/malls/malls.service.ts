import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Mall } from './mall.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class MallsService {
  constructor(
    @InjectModel(Mall) private readonly mallModel: ReturnModelType<typeof Mall>
  ) { }

  async create(createMallDto: { name: string, address: string }): Promise<Mall> {
    return await this.mallModel.create(createMallDto);
  }

  async findAll(): Promise<Mall[] | null> {
    return await this.mallModel.find().exec();
  }
}

