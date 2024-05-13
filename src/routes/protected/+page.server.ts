import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true
        }
    });
    console.log("BACKEND:", users);
    return {
        users
    };
}
