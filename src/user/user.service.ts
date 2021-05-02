
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './user.model';
import { Store } from '../stores/store.model';
import { ReturnModelType, Ref } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) { }

  async create(createUserDto: { email: string, password: string }): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUserDto) {
    return await this.userModel.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  async findAll(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }
}