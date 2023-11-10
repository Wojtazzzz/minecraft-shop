import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
	constructor(private prisma: PrismaService) {}

	async getAllProducts() {
		return this.prisma.product.findMany({
			where: {
				active: true,
			},
			select: {
				id: true,
				name: true,
				image: true,
				price: true,
			},
		});
	}
}
