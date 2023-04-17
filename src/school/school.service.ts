import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}

  async getList(){
    return this.schoolRepository.findAndCount(); 
  }
  async createSchool(createSchoolDto: CreateSchoolDto) {
    const createschool = new School(createSchoolDto);

    await this.schoolRepository.save(createschool);
    return this.schoolRepository.findBy({ school_id: createschool.school_id });
  }

  async updateSchool(SchoolId: number, updateSchoolDto: UpdateSchoolDto) {
    const exist = await this.schoolRepository.findOne({
      where: { school_id: SchoolId },
    });
    if (exist) {
      exist.name = updateSchoolDto.name;
      exist.time = updateSchoolDto.time;
      await this.schoolRepository.save(exist);
    }
    else{
      return "Class not exist"
    }
    return exist;
    
    }

    async deleteSchool(schoolId: number) {
        await this.schoolRepository.delete(schoolId);

        return "delete success"
    }
}
