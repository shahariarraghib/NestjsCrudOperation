import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';
import {OperationsSchema} from './schemas/Operations.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Operations', schema: OperationsSchema }])],
  controllers: [ OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
