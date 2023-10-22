import { ServiceUnavailableException } from '@nestjs/common';

export const DATABASE_URL = checkEnvVariable(
	'DATABASE_URL',
	process.env.DATABASE_URL,
);

export const JWT_SECRET = checkEnvVariable(
	'JWT_SECRET',
	process.env.JWT_SECRET,
);

function checkEnvVariable(name: string, variable: unknown) {
	if (!variable) {
		throw new ServiceUnavailableException(
			`Env variable ${name} is not set`,
		);
	}

	return String(variable);
}
