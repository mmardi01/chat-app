import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guards/AuthGuard';
import { Request } from 'express';
import { PasswordDto } from './dto/passwordDto';
import { FileInterceptor } from '@nestjs/platform-express';

type UpdateData = {
  username?: string;
  email?: string;
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

  @Get('search')
  async searchForUser(@Query('username') username: string) {
    return this.userService.search(username);
  }

  @Put('update')
  async update(@Req() req: Request, @Body() data: UpdateData) {
    return this.userService.update(req['user'].sub, data);
  }

  @Put('updatepassword')
  async updatePassword(@Req() req: Request, @Body() data: PasswordDto) {
    return this.userService.updatePassword(req['user'].sub, data);
  }

  @Put('updatepicture')
  @UseInterceptors(FileInterceptor('image'))
  updatePicture(@Req() req: Request,@UploadedFile() image: Express.Multer.File) {
    this.updatePicture(req['user'].sub,image)
    return 'file uploaded';
  }
}
