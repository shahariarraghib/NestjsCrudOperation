import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsController } from './operations/operations.controller';
import { OperationsService } from './operations/operations.service';
import {OperationsModule} from "./operations/operations.module"
import { MongooseModule } from '@nestjs/mongoose';
import config from './Config/keys'
@Module({
  imports: [OperationsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, OperationsController],
  providers: [AppService, OperationsService],
})
export class AppModule {}
