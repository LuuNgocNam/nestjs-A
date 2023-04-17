import { Paging } from 'common/response/Paging';
import { Response } from 'common/response/Response';
import { ExceptionsLoggerFilter } from './../utils/exceptions-logger-filter/exceptions-logger-filter';
import { CreatePostDto } from './dto/create-post-dto/create-post-dto';
import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService
    )
    {

    }
    @Get()
        async getListPost()
        {
            const paging = {
                page: 1,
                page_size: 10
            }
            const [listPosts, totalPage] = await this.postService.getListPost();
            const pagingRes = new Paging(paging.page, paging.page_size, totalPage)
            return new Response(200, listPosts, 'success', pagingRes);
        }


    @Post('create')
    @UseFilters(ExceptionsLoggerFilter)
    async createPost(
        @Body() data: CreatePostDto

    ){
        try{
            const response = await this.postService.createPost(data);
            return new Response(200, response, 'success', );
        }catch (e) {
            return e.response?.data;
        }
    }

}
