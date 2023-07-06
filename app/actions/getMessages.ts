<<<<<<< HEAD
import prisma from '@/app/libs/prismadb';

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
=======
import prisma from "@/app/libs/prismadb";

const getMessages = async (
  conversationId: string
) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        sender: true,
        seen: true
      },
      orderBy: {
        createdAt: 'asc'
      }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    });

    return messages;
  } catch (error: any) {
    return [];
  }
<<<<<<< HEAD
};

export default getMessages;
=======
}

export default getMessages;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
