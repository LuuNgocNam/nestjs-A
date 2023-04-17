import { IsString, IsNotEmpty } from 'class-validator';

export class loginDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export default loginDto;
