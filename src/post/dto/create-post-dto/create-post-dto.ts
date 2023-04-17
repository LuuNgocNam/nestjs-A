import { IsNotEmpty, IsString } from "class-validator";


export class CreatePostDto {
    
    @IsString()
    @IsNotEmpty()
    fisrtName:string;

    @IsString()
    @IsNotEmpty()
    lastname:string;

    @IsString()
    @IsNotEmpty()
    isActive: boolean;
}
