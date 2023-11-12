import { StripeService } from './stripe.service';
import {
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	RawBodyRequest,
	Req,
} from '@nestjs/common';

@Controller('stripe')
export class StripeController {
	constructor(private stripeService: StripeService) {}

	@HttpCode(HttpStatus.OK)
	@Post('/webhook')
	async webhook(@Req() request: RawBodyRequest<Request>) {
		this.stripeService.consumeWebhookRequest(
			request.headers['stripe-signature'],
			request.rawBody,
		);
	}
}
