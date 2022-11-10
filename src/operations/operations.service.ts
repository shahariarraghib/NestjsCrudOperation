import { Injectable } from '@nestjs/common';
import { operations } from './interface/operation.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class OperationsService {

// constructor(@InjectModel('operations') private readonly Operation: Model<operations>) {}


private readonly operators:operations[] = [
 

    {
id: "12144",
name: "sha",
title: "developer",
age: 26
    },
    {
        id: "5454545",
        name: "sha1",
        title: "developer",
        age: 26
            }

]

findAll(): operations[]{
    return this.operators;
}

findOne(id: string): operations{
    return this.operators.find(operators => operators.id === id )
}


// async findAll(): Promise<operations[]>{
//     return await this.OperationModel.find()
// }

// async findOne(id: string): Promise<operations>{
//     return await this.OperationModel.findOne({_id: id})
// }

}
