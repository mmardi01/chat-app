import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guards/AuthGuard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUser(@Req() req: Request) {
    return this.userService.findUser(req);
  }
}
