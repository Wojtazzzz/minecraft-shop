import type { MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { E2eController } from './e2e.controller';
import { E2eMiddleware } from './e2e.middleware';

@Module({
	controllers: [E2eController],
	providers: [PrismaService],
})
export class E2eModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(E2eMiddleware).forRoutes('e2e');
	}
}
