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
			price: 1000,
			active: true,
			image: 'https://www.pngimages.in/uploads/png-webp/2022/2022-November/Minecraft_Photos_Png.webp',
			commands: [
				'add vip %s',
				'say Hello, %s bought Vip 30d! Thank You!',
			],
		},
	});

	await prisma.product.create({
		data: {
			name: 'SVIP 30d',
			description: 'SVip 30 provides many exciting benefits!',
			price: 2000,
			active: true,
			image: 'https://toppng.com/uploads/preview/minecraft-chest-png-clip-library-download-minecraft-chest-open-11562908576cajwnxujsf.png',
			commands: [
				'add svip %s',
				'say Hello, %s bought SVip 30d! Thank You!',
			],
		},
	});

	await prisma.product.create({
		data: {
			name: 'SEVIP 30d',
			description: 'SEVip 30 provides many exciting benefits!',
			price: 2000,
			active: true,
			image: 'https://i.pinimg.com/236x/11/21/56/11215611f7e4d0b5a32a20cbea1c0f13.jpg',
			commands: [
				'add sevip %s',
				'say Hello, %s bought SEVip 30d! Thank You!',
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
