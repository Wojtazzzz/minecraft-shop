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
		const input = this.page.getByLabel('Hasło');

		await input.fill(text);
	}

	async submitForm() {
		const button = this.page.getByRole('button', {
			name: 'Zaloguj',
		});

		await button.click();
	}

	getInvalidCredentialsError() {
		return this.page
			.getByRole('alert')
			.filter({ hasText: 'Podano nieprawidłowe dane logowania' });
	}

	getLoginIsRequiredError() {
		return this.page.getByRole('alert').filter({ hasText: 'login jest wymagany' });
	}

	getPasswordIsRequiredError() {
		return this.page.getByRole('alert').filter({ hasText: 'hasło jest wymagane' });
	}
}
