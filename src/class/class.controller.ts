import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from './../../common/response/Response';
import { Paging } from 'common/response/Paging';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update_class.dto';

@Controller('class')
export class ClassController {
  constructor(private classService: ClassService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/list')
  async getList(@Req() request: Request) {
    try {
      const filter = {
        page: 1,
        page_size: 10,
      };

      const [listSchool, total] = await this.classService.getList();
      const paging = new Paging(filter.page, filter.page_size, total);

      return new Response(HttpStatus.OK, listSchool, 'success', paging);
    } catch (e) {
      return new Response(HttpStatus.NOT_IMPLEMENTED, [], 'error');
    }
  }

  @Post('/create')
  async create(@Body() createClassDto: CreateClassDto) {
    return this.classService.createClass(createClassDto);
  }

  @Put('/update/:id')
  async updateClass(
    @Param('id') ClassId: number,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    return this.classService.updateClass(ClassId, updateClassDto);
  }

  @Delete(':id')
  async deleteClass(@Param('id') classId: number) {
    return this.classService.deleteClass(classId);
  }
}
