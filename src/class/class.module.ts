import { SchoolModule } from './../school/school.module';
import { School } from './../school/entities/school.entity';
import { SchoolService } from './../school/school.service';
import { Class } from './entities/class.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { SchoolController } from 'src/school/school.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class, School]), SchoolModule],
  controllers: [ClassController, SchoolController],
  providers: [ClassService, SchoolService],
})
export class ClassModule {}
