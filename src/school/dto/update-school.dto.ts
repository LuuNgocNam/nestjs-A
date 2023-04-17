import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateSchoolDto {
 
    @IsString()
    @IsNotEmpty({ message: 'name is not empty' })
    name: string;
    
    @IsString()
    @IsNotEmpty({ message: 'time is not empty' })
    time: string;

}



