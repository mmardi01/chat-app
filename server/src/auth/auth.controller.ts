import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
  
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignupDto, @Res({passthrough:true}) res: Response) {
    return this.authService.signup(dto, res);
  }

  @Post('signin')
  signin(@Body() dto: SigninDto, @Res({passthrough:true}) res: Response) {
    return  this.authService.signin(dto,res);
  }
}
