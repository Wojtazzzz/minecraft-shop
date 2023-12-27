import type { MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TestsController } from './tests.controller';
import { TestsMiddleware } from './tests.middleware';

@Module({
	controllers: [TestsController],
	providers: [PrismaService],
})
export class TestsModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(TestsMiddleware).forRoutes('tests');
	}
}
