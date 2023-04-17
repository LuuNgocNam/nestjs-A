import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Paging } from 'common/response/Paging';
import { UserService } from './user.service';
import { Response } from 'common/response/Response';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async getListUser()
    {
        const [listsUser, total] = await this.userService.getListUser();
        const paging = new Paging(1, 10, total)

        return new Response(200, listsUser, 'success', paging)
    }
}
