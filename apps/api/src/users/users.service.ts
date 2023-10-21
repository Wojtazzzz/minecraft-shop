import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async findUserById(id: number) {
		return await this.prisma.user.findFirst({
			where: {
				id,
			},
			select: {
				id: true,
				login: true,
				email: true,
				createdAt: true,
			},
		});
	}

	async getUserAuthorizationData(login: string) {
		return await this.prisma.user.findFirst({
			where: {
				login,
			},
			select: {
				id: true,
				login: true,
				password: true,
			},
		});
	}
}
