import { BadRequestException, Injectable } from '@nestjs/common';
import StripePackage from 'stripe';
import { APP_URL, STRIPE_SECRET } from '../helpers/env';

@Injectable()
export class StripeService {
	private stripe: StripePackage;

	constructor() {
		this.stripe = new StripePackage(STRIPE_SECRET);
	}

	async createCheckoutUrl(productName: string, cost: number) {
		const session = await this.stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: 'pln',
						unit_amount: cost,
						product_data: {
							name: productName,
							metadata: {
								id: 989,
								user_id: 123456789,
							},
						},
					},
					quantity: 1,
				},
			],
			mode: 'payment',
			success_url: `${APP_URL}/payment?success=true`,
			cancel_url: `${APP_URL}/payment?canceled=true`,
		});

		return session.url;
	}

	async consumeWebhookRequest(signature: string, body: any) {
		const endpointSecret = '';

		let event;

		try {
			event = this.stripe.webhooks.constructEvent(
				body,
				signature,
				endpointSecret,
			);
		} catch (err) {
			throw new BadRequestException(`Webhook Error: ${err.message}`);
		}

		switch (event.type) {
			case 'payment_intent.succeeded':
				console.log(event.data.object);

				break;

			default:
				console.log(`Unhandled event type ${event.type}`);
				console.log(event);
		}
	}
}
