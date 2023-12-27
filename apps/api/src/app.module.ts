import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';
import { E2eModule } from './e2e/e2e.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['../.env'],
		}),
		AuthModule,
		UsersModule,
		ProductsModule,
		StripeModule,
		E2eModule,
	],
})
export class AppModule {}
