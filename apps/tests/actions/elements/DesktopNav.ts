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
}
