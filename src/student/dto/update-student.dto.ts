import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';


export class UpdateStudentDto {
    
    @ApiProperty()
    @IsNotEmpty()
    class_id: number;

    @ApiProperty()
    @IsNotEmpty()
    First_name: string;

    @ApiProperty()
    @IsNotEmpty()
    Last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    Date_of_birth: string;

    @ApiProperty()
    @IsNotEmpty()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    Phone: number;
}
