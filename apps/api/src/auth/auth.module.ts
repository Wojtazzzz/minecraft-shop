import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '../helpers/env';

@Module({
	controllers: [AuthController],
	providers: [AuthService, UsersService, PrismaService],
	imports: [
		JwtModule.register({
			global: true,
			secret: JWT_SECRET,
			signOptions: { expiresIn: '900s' },
		}),
	],
})
export class AuthModule {}
