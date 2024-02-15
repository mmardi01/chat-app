import {
  Body,
  Controller,
  Get,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guards/AuthGuard';
import { Request } from 'express';

type UpdateData = {
  username?: string;
  email?: string;
  image?: string;
  password?: string;
};

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUser(@Req() req: Request) {
    return this.userService.getUser(req['user'].sub);
  }

  @Get('profile')
  async findUser(@Query('id') id: string) {
    return this.userService.getUser(id);
  }

  @Get('all')
  async findAll() {
    return this.userService.getAll();
  }

  @Put('update')
  async update(@Req() req: Request, @Body() data: UpdateData) {
    return this.userService.update(req['user'].sub, data);
  }

  @Get('search')
  async searchForUser(@Query('username') username: string) {
    return this.userService.search(username);
  }
}
