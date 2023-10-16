import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';

@Module({
	controllers: [AuthController],
	providers: [AuthService, UsersService, PrismaService],
	imports: [
		JwtModule.register({
			global: true,
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '60s' },
		}),
	],
})
export class AuthModule {}
