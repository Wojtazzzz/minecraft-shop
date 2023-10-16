import { PrismaClient } from '@prisma/client';
import { createHash } from '../src/helpers/hash';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.deleteMany({});

	await prisma.user.create({
		data: {
			email: 'marcin.witas@gmail.com',
			login: 'admin',
			password: await createHash('admin'),
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
