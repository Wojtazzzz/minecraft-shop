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
			image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fxgp.pl%2Fporadniki%2Fjak-zrobic-ksiazke-w-minecraft%2F&psig=AOvVaw0y6iH1AOCebg1mnw-O7iB1&ust=1699730469402000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjT1MiTuoIDFQAAAAAdAAAAABAG',
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
