import { CreatePostDto } from './dto/create-post-dto/create-post-dto';
import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private postsRepository: Repository<PostEntity>
      ) {

      }
    async getListPost()
    {
        console.log("........... Data")
        return this.postsRepository.findAndCount();
    }
    async createPost(data: CreatePostDto)
    {
        const newPost = await this.postsRepository.create(data);
        await this.postsRepository.save(newPost);
        return newPost;
    }
}
