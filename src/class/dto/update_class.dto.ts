import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateClassDto {
 
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



