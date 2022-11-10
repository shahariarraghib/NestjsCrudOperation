import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateOperationDto} from "./dto/create.operation.dto"
import { OperationsService } from './operations.service';
import { operations } from './interface/operation.interface';

@Controller('operations')
export class OperationsController {

 constructor (private readonly operationService: OperationsService) {}  

@Get() 
findAll() : operations[] {
    return this.operationService.findAll();
}
 
@Get(':id')
findOne(@Param('id') Operationid ): operations{
    return this.operationService.findOne(Operationid);
}


@Post()
create(@Body() createOperationDto: CreateOperationDto) : string{
    return `Name: ${createOperationDto.name} Title: ${createOperationDto.title} Age: ${createOperationDto.age}`
}


@Delete(':id')
delete(@Param('id') Operationid) : string{
    return `Operation  delete ${Operationid}`
}

@Put(':id')
update(@Body() updateOperationDto:CreateOperationDto, @Param('id') Operationid) : string{
return `Operation update ${Operationid} - Name: ${updateOperationDto.name} Title: ${updateOperationDto.title} Age: ${updateOperationDto.age}`

}
}


