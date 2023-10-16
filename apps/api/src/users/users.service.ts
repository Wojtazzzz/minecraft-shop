import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async findByLogin(login: string) {
		return await this.prisma.user.findFirst({
			where: {
				login,
			},
		});
	}
}
