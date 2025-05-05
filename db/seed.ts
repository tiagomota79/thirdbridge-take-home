import { PrismaClient } from '@/lib/generated/prisma';
import { mockData } from './mock-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: mockData,
    skipDuplicates: true,
  });
  console.log('Mock data seeded successfully');
}

main();
