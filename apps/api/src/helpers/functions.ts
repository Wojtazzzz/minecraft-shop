import { compare, hash } from 'bcrypt';

const hashSaltRounds = 10;

export const createHash = async (text: string) => {
	return await hash(text, hashSaltRounds);
};

export const compareHash = async (text: string, hash: string) => {
	return await compare(text, hash);
};
