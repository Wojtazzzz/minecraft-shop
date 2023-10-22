import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { RequestUser } from './helpers/types';
import type { Request } from 'express';

type RequestWithUser = {
	user: RequestUser;
} & Request;

export const User = createParamDecorator(
	(data: string, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<RequestWithUser>();
		const user = request.user;

		return user?.[data] ?? null;
	},
);
