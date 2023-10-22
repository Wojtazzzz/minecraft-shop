import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { UsersService } from '../users/users.service';
import { JWT_SECRET } from '../helpers/env';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private jwtService: JwtService,
		private usersService: UsersService,
	) {}

	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<Request>();
		const token = request.cookies['access_token'];

		if (!token) {
			throw new UnauthorizedException();
		}

		try {
			const data = await this.jwtService.verifyAsync(token, {
				secret: JWT_SECRET,
			});

			request['user'] = await this.usersService.findUserById(data.sub);
		} catch {
			throw new UnauthorizedException();
		}

		return true;
	}
}
