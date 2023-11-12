import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
	imports: [AuthModule, UsersModule, ProductsModule, StripeModule],
})
export class AppModule {}
