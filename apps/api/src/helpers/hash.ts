import { compare, hash } from 'bcrypt';

const saltRounds = 10;

export const createHash = async (text: string) => {
	return await hash(text, saltRounds);
};

export const compareHash = async (text: string, hash: string) => {
	return await compare(text, hash);
};
