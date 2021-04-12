import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MallsService } from './malls.service';
import { MallsController } from './malls.controller';
import { Mall } from './mall.model';

@Module({
  imports: [TypegooseModule.forFeature([Mall])],
  controllers: [MallsController],
  providers: [MallsService]
})
export class MallsModule { }