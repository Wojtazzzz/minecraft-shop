import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from 'src/prisma.service';
import { StripeService } from 'src/stripe.service';

@Module({
	controllers: [ProductsController],
	providers: [ProductsService, PrismaService, StripeService],
})
export class ProductsModule {}
