import { type Page } from '@playwright/test';

export class LoginPage {
	constructor(private page: Page) {}

	async go() {
		await this.page.goto('/login');
	}

	async fillLoginInput(text: string) {
		const input = this.page.getByLabel('Login');

		await input.fill(text);
	}

	async fillPasswordInput(text: string) {
		const input = this.page.getByLabel('Password');

		await input.fill(text);
	}

	async submitForm() {
		const button = this.page.getByRole('button', {
			name: 'Login',
		});

		await button.click();
	}

	getInvalidCredentialsError() {
		return this.page
			.getByRole('alert')
			.filter({ hasText: 'Provided incorrect credentials' });
	}

	getLoginIsRequiredError() {
		return this.page
			.getByRole('alert')
			.filter({ hasText: 'login is a required field' });
	}

	getPasswordIsRequiredError() {
		return this.page
			.getByRole('alert')
			.filter({ hasText: 'password is a required field' });
	}
}
