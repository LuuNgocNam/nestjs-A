import { SchoolService } from './../school/school.service';
import { School } from './../school/entities/school.entity';
import { forwardRef, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update_class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}

  async getList() {
    return this.classRepository.findAndCount();
  }

  async createClass(createClassDto: CreateClassDto) {
    const createclass = new Class(createClassDto);
    let checkSchool = await this.schoolRepository.findOneBy({
      school_id: createclass.school_id,
    });
    console.log(checkSchool);
    if (checkSchool != null) {
      await this.classRepository.save(createclass);
      return this.classRepository.findBy({ class_id: createclass.class_id });
    } else {
      console.log('Not found');
      return 'school id không tồn tại';
    }
  }

  async updateClass(ClassId: number, updateClassDto: UpdateClassDto) {
    const exist = await this.classRepository.findOne({
      where: { class_id: ClassId },
    });
    if (exist) {
      exist.school_id = updateClassDto.school_id;
      exist.student_id = updateClassDto.student_id;
      exist.tiltle = updateClassDto.tittle;
      exist.time = updateClassDto.time;
      await this.classRepository.save(exist);
    } else {
      return 'id không tồn tại';
    }
    return exist;
  }

  async deleteClass(ClassId: number) {
    await this.classRepository.delete(ClassId);
    return 'delete success';
  }
}
