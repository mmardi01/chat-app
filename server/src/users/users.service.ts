import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getUser(id: string) {
    try {
      const user = this.userRepo.findOne({
        where: {
          id: id
        },
      });

      delete (await user).password;
      return user;
    } catch (error) {
      throw new NotFoundException('user not found.');
    }
  }

  async getAll() {
    try {
      const users = this.userRepo.find({
        select: {
          'id':true,
          'username':true,
          'email':true,
          'image':true,
        }
      });
      return users;
    }
    catch(e){
      throw new ForbiddenException();
    }
  }
}
