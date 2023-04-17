import { Paging } from './../../common/response/Paging';
import { Response } from './../../common/response/Response';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/list')
  async getList(@Req() request: Request) {
    try {
      const filter = {
        page: 1,
        page_size: 10,
      };

      const [listSchool, total] = await this.schoolService.getList();
      const paging = new Paging(filter.page, filter.page_size, total);

      return new Response(HttpStatus.OK, listSchool, 'success', paging);
    } catch (e) {
      return new Response(HttpStatus.NOT_IMPLEMENTED, [], 'error');
    }
  }

  @Post('/create')
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.createSchool(createSchoolDto);
  }

  @Put('/update/:id')
  async updateSchool(
    @Param('id') SchoolId: number,
    @Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.updateSchool(SchoolId, updateSchoolDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') schoolId: number) {
    return this.schoolService.deleteSchool(schoolId);
  }
}
