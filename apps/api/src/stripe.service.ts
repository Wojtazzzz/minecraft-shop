import { Injectable } from '@nestjs/common';
import StripePackage from 'stripe';
import { APP_URL, STRIPE_SECRET } from './helpers/env';

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
}
