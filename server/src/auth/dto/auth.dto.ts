import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignupDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  username: string;
  
  @IsNotEmpty()
  @IsString()
  password:string;

  @IsNotEmpty()
  @IsString()
  confirmPassword:string;
  
  @IsNotEmpty()
  @IsString()
  image:string;
}

export class SigninDto {

  @IsNotEmpty()
  @IsString()
  username: string;
 
  @IsNotEmpty()
  @IsString()
  password:string;
}