import { IsEmail, IsString } from "class-validator";

export class updateDto {
    @IsString()
    username: string;
    
    @IsString()
    @IsEmail()
    email: string;
  
    @IsString()
    image:string

    @IsString()
    password: string;
  }