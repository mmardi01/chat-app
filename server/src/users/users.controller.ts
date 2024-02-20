import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guards/AuthGuard';
import { Request, Response } from 'express';
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
  async updatePicture(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 2 * 1024 * 1024}),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
        ],
      }),
    )
    image: Express.Multer.File,
  ) {
    return await this.userService.updatePicture(req['user'].sub, image);
  }
}
