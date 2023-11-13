import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class ProductsService {
	constructor(
		private prisma: PrismaService,
		private stripeService: StripeService,
	) {}

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

	async getProduct(productId: number) {
		return this.prisma.product.findFirst({
			where: {
				active: true,
				id: productId,
			},
			select: {
				id: true,
				name: true,
				description: true,
				image: true,
				price: true,
			},
		});
	}

	async createProductCheckoutUrl(productId: number) {
		const product = await this.prisma.product.findFirst({
			where: {
				id: productId,
			},
			select: {
				id: true,
				active: true,
				name: true,
				price: true,
			},
		});

		if (!product) {
			/* TODO: Domain error "Product not found" */
		}

		if (!product.active) {
			/* TODO: Domain error "Product is not active" */
		}

		return this.stripeService.createCheckoutUrl(
			product.name,
			product.price,
		);
	}
}
