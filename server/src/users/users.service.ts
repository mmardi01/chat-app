import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findUser(req: Request) {
    try {
      const user = this.userRepo.findOne({
        where: {
          id: req['user'].id,
        },
      });

      delete (await user).password;

      return user;
    } catch (error) {
      throw new NotFoundException('user not found.');
    }
  }
}
