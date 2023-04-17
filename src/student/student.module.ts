import { School } from './../school/entities/school.entity';
import { SchoolService } from './../school/school.service';
import { SchoolController } from './../school/school.controller';
import { SchoolModule } from './../school/school.module';
import { ClassModule } from './../class/class.module';
import { ClassService } from './../class/class.service';
import { ClassController } from './../class/class.controller';
import { Class } from './../class/entities/class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Class, School]), ClassModule],
  controllers: [StudentController, ClassController],
  providers: [StudentService, ClassService],
})
export class StudentModule {}
