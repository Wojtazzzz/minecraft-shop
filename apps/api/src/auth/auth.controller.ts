import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Res,
	UnauthorizedException,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { User } from '../user.decorator';
import { UsersService } from '../users/users.service';
import { messages } from 'src/helpers/messages';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private usersService: UsersService,
	) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	async login(
		@Body() body: LoginDto,
		@Res({ passthrough: true }) response: Response,
	) {
		const user = await this.authService.attempt(body.login, body.password);

		if (!user) {
			throw new UnauthorizedException({
				error: 'Niepoprawne dane logowania',
			});
		}

		const accessToken = await this.authService.generateAccessToken(
			user.id,
			user.login,
		);

		response.cookie('access_token', accessToken, {
			sameSite: 'strict',
			httpOnly: true,
		});

		return;
	}

	@HttpCode(HttpStatus.OK)
	@Post('logout')
	async logout(@Res({ passthrough: true }) response: Response) {
		response.cookie('access_token', null, {
			expires: new Date(),
		});

		return;
	}

	@UseGuards(AuthGuard)
	@Get('me')
	async getLoggedUser(@User('id') id: number) {
		const { login, email } = await this.usersService.findUserById(id);

		return {
			login,
			email,
		};
	}
}
