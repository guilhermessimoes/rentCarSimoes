import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash('123', 8);
  await prisma.user.create({
    data: {
      name: 'Guilherme Admin',
      admin: true,
      password: passwordHash,
      email: 'guilhermeAdmin@gmail.com',
      driver_license: 'AB',
    },
  });
}

main().catch(e => {
  console.log(e);
  process.exit(1);
});
export { main };
