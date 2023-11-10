import { PrismaClient } from '@prisma/client';
import { createHash } from '../src/helpers/functions';

const prisma = new PrismaClient();

async function main() {
	/* Users */
	await prisma.user.deleteMany({});

	await prisma.user.create({
		data: {
			email: 'marcin.witas@gmail.com',
			login: 'admin',
			password: await createHash('admin'),
		},
	});

	/* Products */
	await prisma.product.deleteMany({});

	await prisma.product.create({
		data: {
			name: 'VIP 30d',
			description: 'Vip 30 provides many exciting benefits!',
			price: 10.0,
			active: true,
			image: 'https://xgp.pl/wp-content/uploads/2022/07/ksiazka-minecraft-1024x576.jpg.webp',
			commands: [
				'add vip %s',
				'say Hello, %s bought Vip 30d! Thank You!',
			],
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
