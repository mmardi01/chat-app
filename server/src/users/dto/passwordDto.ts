import { IsNotEmpty, IsStrongPassword } from "class-validator";

export class PasswordDto {
    @IsNotEmpty()
    currentPassword:string;

    @IsNotEmpty()
    @IsStrongPassword()
    newPassword:string;

    @IsNotEmpty()
    confirmPassword: string;
}