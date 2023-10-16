import { hash } from 'bcrypt';

const saltRounds = 10;

export const createHash = (text: string) => {
	return hash(text, saltRounds);
};
