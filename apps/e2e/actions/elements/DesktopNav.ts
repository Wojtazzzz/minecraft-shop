import { type Page } from '@playwright/test';

export class DesktopNav {
	constructor(private page: Page) {}

	async goToLoginPage() {
		await this.page
			.getByRole('link', {
				name: 'zaloguj',
			})
			.click();
	}

	async goToShopPage() {
		await this.page
			.getByRole('link', {
				name: 'sklep',
			})
			.and(this.page.getByText('Sklep'))
			.click();
	}

	async clickOnLogoutButton() {
		await this.page
			.getByRole('button', {
				name: 'Wyloguj',
			})
			.click();
	}
}
