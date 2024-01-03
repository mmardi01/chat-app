import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtServcie: JwtService, 
    private config: ConfigService
    ) {}

  async canActivate(context: ExecutionContext):  Promise<boolean>  {
      
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromCookies(request);
    if(!token)
      throw new UnauthorizedException('invalid token');
    try {
      const payload = await this.jwtServcie.verifyAsync(token,{
        secret:this.config.get('JWT_SECRET')
      });
        request['user'] = payload;
      }
      catch(e) {
        throw new UnauthorizedException('invalid token')
    }
    return true;
  }

  extractTokenFromCookies(request: Request) : string | undefined {

    const token = request.cookies['jwt'].access_token;
    return token;
  }

}