import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateClassDto {
    
    @IsString()
    @IsNotEmpty()
    school_id: number;
    
    @IsString()
    @IsNotEmpty()
    student_id: number;

    @IsString()
    @IsNotEmpty()
    tittle: string;

    @IsString()
    @IsNotEmpty()
    time: string;
}
export default CreateClassDto;



