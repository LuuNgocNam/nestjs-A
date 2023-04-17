import LoginDto from './dto/login.dto';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  HttpStatus,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Response as ReponseResult } from 'common/response/Response';
import JwtAuthenticationGuard from './guards/jwt-authentication.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() registrationData: RegisterDto) {
    try {
      console.log('.... registrationData', registrationData);
      const user = await this.authService.register(registrationData);
      return new ReponseResult(HttpStatus.OK, user, 'success');
    } catch (e) {
      console.log('........ register:e =>', e);
    }
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async logIn(@Body() user: LoginDto) {
    console.log('........ user:', user);

    return await this.authService.login(user);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthenticationGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('......REQ', req);
    return req.user;
  }
}
