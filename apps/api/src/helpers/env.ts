import { ServiceUnavailableException } from '@nestjs/common';
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`.env.${process.env.NODE_ENV}`);

export const DATABASE_URL = checkEnvVariable(
	'DATABASE_URL',
	process.env.DATABASE_URL,
);

export const APP_URL = checkEnvVariable('APP_URL', process.env.APP_URL);

export const JWT_SECRET = checkEnvVariable(
	'JWT_SECRET',
	process.env.JWT_SECRET,
);

export const STRIPE_SECRET = checkEnvVariable(
	'STRIPE_SECRET',
	process.env.STRIPE_SECRET,
);

function checkEnvVariable(name: string, variable: unknown) {
	if (!variable) {
		throw new ServiceUnavailableException(
			`Env variable ${name} is not set`,
		);
	}

	return String(variable);
}
