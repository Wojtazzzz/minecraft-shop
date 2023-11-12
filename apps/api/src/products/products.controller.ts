import {
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) {}

	@Get('/')
	async index() {
		return await this.productsService.getAllProducts();
	}

	@Get('/:id')
	async show(@Param('id') id: string) {
		const product = await this.productsService.getProduct(parseInt(id));

		if (!product) {
			throw new NotFoundException();
		}

		return product;
	}

	@Post('/:id/buy')
	async buy(@Param('id') id: string) {
		return this.productsService.createProductCheckoutUrl(parseInt(id));
	}
}
