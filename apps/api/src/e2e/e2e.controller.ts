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
	}

	@Get('/teardown')
	async teardown() {
		await this.prisma.user.deleteMany();
		await this.prisma.product.deleteMany();
	}
}
