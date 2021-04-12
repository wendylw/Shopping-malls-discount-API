import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { Store } from './store.model';

@Module({
  imports: [TypegooseModule.forFeature([Store])],
  controllers: [StoresController],
  providers: [StoresService]
})
export class StoresModule { }