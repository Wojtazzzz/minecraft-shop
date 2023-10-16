import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareHash } from '../helpers/hash';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async attempt(login: string, password: string) {
		const user = await this.usersService.findByLogin(login);

		if (!user) {
			return false;
		}

		const x = await compareHash(password, user.password);

		if (!x) {
			return false;
		}

		return user;
	}

	async generateAccessToken(id: number, login: string) {
		return {
			accessToken: await this.jwtService.signAsync({
				sub: id,
				login,
			}),
		};
	}
}
