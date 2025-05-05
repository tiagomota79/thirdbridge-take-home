'use server';
import { PrismaClient } from '../generated/prisma';
import { convertToPlainObject } from '../utils';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const data = await prisma.user.findMany();

  return convertToPlainObject(data);
}

export async function getUserById(id: number) {
  const data = await prisma.user.findUnique({
    where: { id },
  });

  return convertToPlainObject(data);
}

export async function getUserFriends(id: number) {
  const user = await getUserById(id);

  if (!user) {
    throw new Error('User not found');
  }

  const friends = await prisma.user.findMany({
    where: {
      id: {
        in: user.friends,
      },
    },
  });

  return convertToPlainObject(friends);
}
