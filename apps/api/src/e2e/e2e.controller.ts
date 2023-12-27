import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { createHash } from 'src/helpers/functions';

@Controller('e2e')
export class E2eController {
	constructor(private prisma: PrismaService) {}

	@Get('/setup')
	async setup() {
		await this.prisma.user.create({
			data: {
				id: 1,
				email: 'jan.kowalski@mc_shop_fake.pl',
				login: 'jan_kowalski',
				password: await createHash('admin'),
			},
		});

		await this.prisma.product.create({
			data: {
				id: 1,
				name: 'Ranga VIP 30d',
				price: 11.99,
				active: true,
			},
		});

		await this.prisma.product.create({
			data: {
				id: 2,
				name: 'Ranga VIP 14d',
				price: 8.99,
				active: false,
			},
		});
	}

	@Get('/teardown')
	async teardown() {
		await this.prisma.user.deleteMany();
		await this.prisma.product.deleteMany();
	}
}
