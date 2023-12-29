import { type Page } from '@playwright/test';

export class DesktopNav {
	constructor(private page: Page) {}

	async goToLoginPage() {
		await this.page
			.getByRole('link', {
				name: 'login',
			})
			.click();
	}

	async goToShopPage() {
		await this.page
			.getByRole('link', {
				name: 'shop',
			})
			.and(this.page.getByText('Shop'))
			.click();
	}

	async clickOnLogoutButton() {
		await this.page
			.getByRole('button', {
				name: 'logout',
			})
			.click();
	}
}
