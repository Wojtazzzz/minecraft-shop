import { Injectable } from '@nestjs/common';
import { compareHash } from '../helpers/hash';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async attempt(login: string, password: string) {
		const user = await this.usersService.getUserAuthorizationData(login);

		if (!user) {
			return false;
		}

		const isPasswordValid = await compareHash(password, user.password);

		if (!isPasswordValid) {
			return false;
		}

		return user;
	}

	async generateAccessToken(id: number, login: string) {
		return await this.jwtService.signAsync({
			sub: id,
			login,
		});
	}
}
