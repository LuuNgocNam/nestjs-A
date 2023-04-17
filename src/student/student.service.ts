import { Class } from './../class/entities/class.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async getList() {
    return this.studentRepository.findAndCount();
  }

  async createStudent(createStudentDto: CreateStudentDto) {
    const createstudent = new Student(createStudentDto);
    let checkClass = await this.classRepository.findOneBy({
      class_id: createstudent.class_id,
    });
    console.log(checkClass);
    if (checkClass != null) {
      await this.studentRepository.save(createstudent);
      return this.studentRepository.findBy({
        student_id: createstudent.student_id,
      });
    } else {
      console.log('Not found');
      return 'class id không tồn tại';
    }
  }

  async updateStudent(StudentId: number, updateStudentDto: UpdateStudentDto) {
    const exist = await this.studentRepository.findOne({
      where: { student_id: StudentId },
    });
    if (exist) {
      exist.class_id = updateStudentDto.class_id;
      exist.Fisrt_name = updateStudentDto.First_name;
      exist.Last_name = updateStudentDto.Last_name;
      exist.Date_of_birth = updateStudentDto.Date_of_birth;
      exist.Email = updateStudentDto.Email;
      exist.Phone = updateStudentDto.Phone;
      await this.studentRepository.save(exist);
    }
    return exist;
  }

  async deleteStudent(studentId: number) {
    await this.studentRepository.delete(studentId);

    return 'delete success';
  }
}
