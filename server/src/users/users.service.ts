import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { PasswordDto } from './dto/passwordDto';
import * as bcrypt from 'bcrypt';

type UpdateData = {
  username?: string;
  email?: string;
  image?: string;
};

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getUser(id: string) {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: id,
        },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new NotFoundException('user not found.');
    }
  }

  async getAll() {
    try {
      const users = await this.userRepo.find({
        select: {
          id: true,
          username: true,
          email: true,
          image: true,
        },
      });
      return users;
    } catch (e) {
      throw new ForbiddenException();
    }
  }

  async search(username: string) {
    try {
      if (!username.length) return [];

      const users = await this.userRepo.find();

      const res = users.filter((user) => user.username.startsWith(username));
      return res;
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  async update(userId: string, data: UpdateData) {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: userId,
        },
      });
      const updatedUser = await this.userRepo.update(
        {
          id: userId,
        },
        {
          username: data.username ? data.username : user.username,
          email: data.email ? data.email : user.email,
        },
      );
      return updatedUser;
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }

  async updatePassword(userId: string, data: PasswordDto) {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: userId,
        },
      });
      const match = await bcrypt.compare(data.currentPassword, user.password);
      if (!match)
        throw new UnauthorizedException('current password is incorrect!');
      if (data.newPassword !== data.confirmPassword)
        throw new UnauthorizedException('does not match password');
      const password = await bcrypt.hash(data.newPassword, 10);
      await this.userRepo.update(
        {
          id: userId,
        },
        {
          password: password,
        },
      );
      return user;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  }

  async updatePicture(userId: string, image: Express.Multer.File) {
    try {
      const user = await this.userRepo.update(
        {
          id: userId,
        },
        {
          image: image.filename,
        },
      );
      return 'image uploaded'
    } catch (error) {
      throw new ForbiddenException('cannot upload image!');
    }
  }
}
 