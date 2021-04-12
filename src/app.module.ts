import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from './user/user.module';
import { StoresModule } from './stores/stores.module';
import { ActivitiesModule } from './activities/activities.module';
import { MallsModule } from './malls/malls.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/shopping-mall-activities', {
      useNewUrlParser: true,
    }),
    UserModule,
    StoresModule,
    ActivitiesModule,
    MallsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }