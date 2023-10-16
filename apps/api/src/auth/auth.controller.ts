import {
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Get('login')
	async login() {
		const login = 'admin';
		const password = 'admin';

		const user = await this.authService.attempt(login, password);

		if (!user) {
			throw new UnauthorizedException();
		}

		const data = await this.authService.generateAccessToken(
			user.id,
			user.login,
		);

		return {
			access_token: data.accessToken,
		};
	}
}
