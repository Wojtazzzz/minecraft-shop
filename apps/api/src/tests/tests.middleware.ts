import type { NestMiddleware } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NODE_ENV } from 'src/helpers/env';

@Injectable()
export class TestsMiddleware implements NestMiddleware {
	use(req: any, res: any, next: () => void) {
		if (NODE_ENV !== 'test') {
			throw new NotFoundException();
		}

		next();
	}
}
