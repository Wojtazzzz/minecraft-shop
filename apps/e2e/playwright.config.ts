import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	timeout: 30000,
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : 3,
	maxFailures: 999,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: process.env.APP_URL,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'setup',
			testMatch: /global.setup\.ts/,
			teardown: 'cleanup db',
		},
		{
			name: 'cleanup db',
			testMatch: /global.teardown\.ts/,
		},
		{
			name: 'login',
			testMatch: /global.login\.ts/,
			dependencies: ['setup'],
		},

		{
			name: 'chromium',
			testDir: './tests/app',
			use: { ...devices['Desktop Chrome'] },
			dependencies: ['setup'],
		},
		{
			name: 'firefox',
			testDir: './tests/app',
			use: { ...devices['Desktop Firefox'] },
			dependencies: ['setup'],
		},
		{
			name: 'webkit',
			testDir: './tests/app',
			use: { ...devices['Desktop Safari'] },
			dependencies: ['setup'],
		},

		{
			name: 'api',
			testDir: './tests/api',
			dependencies: ['login'],
			use: {
				storageState: 'loginState.json',
			},
		},

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	// 	command: 'turbo run start:e2e',
	// 	url: 'http://127.0.0.1:3000',
	// 	reuseExistingServer: !process.env.CI,
	// },
});
