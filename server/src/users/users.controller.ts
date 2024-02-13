import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guards/AuthGuard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUser(@Req() req: Request) {
    return this.userService.getUser(req['user'].id); 
  }

  @Get('profile')
  async findUser(@Query('id') id: string) {
    return this.userService.getUser(id);
  }

  @Get('all')
  async findAll() {
    return this.userService.getAll();
  }
}
