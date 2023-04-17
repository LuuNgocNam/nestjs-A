import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { Paging } from 'common/response/Paging';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentService } from './student.service';
import { Response } from './../../common/response/Response';



@Controller('student')
export class StudentController {
    constructor(
        private studentService: StudentService
        
    ) {}

    @HttpCode(HttpStatus.OK)
    @Get('/list')
    async getList(
      @Req() request: Request
    )
    {
      try {
        const filter = {
          page: 1,
          page_size: 10
        };

        const [listStudent, total] = await this.studentService.getList();
        const paging = new Paging(filter.page, filter.page_size, total);

        return new Response(HttpStatus.OK, listStudent, 'success', paging)
      } catch (e) {
        return new Response(HttpStatus.NOT_IMPLEMENTED, [], 'error')
      }
    }
    
    @Post('/create')
    async create(@Body() createStudentDto: CreateStudentDto,) {
      return this.studentService.createStudent(createStudentDto);
    }

    @Put('/update/:id')
    async updateStudent(
      @Param('id') StudentId: number,
      @Body() updateStudentDto: UpdateStudentDto,
    ) {
      return this.studentService.updateStudent(StudentId, updateStudentDto);
    }
  
    @Delete(':id')
    async deleteStudent(@Param('id') StudentId: number) {
      return this.studentService.deleteStudent(StudentId);
    }

}
