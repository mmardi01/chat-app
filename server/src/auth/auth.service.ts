import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { SigninDto, SignupDto } from './dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignupDto, res: Response) {
    try {
      if (dto.password !== dto.confirmPassword)
        throw new ForbiddenException('Password doesy not match.');

      const hash = await bcrypt.hash(dto.password, 10);

      const newUser = this.userRepo.create({
        username: dto.username,
        email: dto.email,
        password: hash,
        image: '../images/default.webp',
      });

      const userCreated = await this.userRepo.save(newUser);
      delete userCreated.password;
      const jwt = await this.signToken(userCreated.id, userCreated.username);
      res.cookie('jwt', jwt, {
        httpOnly: true,
      });

      return userCreated;
    } catch (e) { 
      console.log(e.code);
      if (e.code == 23505)
        throw new ForbiddenException('Username already exists');
      throw new ForbiddenException('error');
    }
  }

  async signin(dto: SigninDto, res: Response) {
    try {
      const user = await this.userRepo.findOneOrFail({
        where: {
          username: dto.username,
        },
      });
      const match = await bcrypt.compare(dto.password,user.password);
      if (!match) throw new UnauthorizedException('Password incorrect!');
      const jwt = await this.signToken(user.id, user.username);
      res.cookie('jwt', jwt, { 
        httpOnly: true,
      });
      delete user.password;
      return user;
    } catch (e) {
      throw new UnauthorizedException('Username or password is incorrect');
    }
  }

  async signToken(userId: string, username: string) {
    const payload = {
      sub: userId,
      username,
    };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
