<<<<<<< HEAD
import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

const getConversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
=======
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (
  conversationId: string
) => {
  try {
    const currentUser = await getCurrentUser();

    if(!currentUser?.email) {
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
<<<<<<< HEAD
        id: conversationId,
      },
      include: {
        users: true,
      },
=======
        id: conversationId
      },
      include: {
        users: true
      }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    });

    return conversation;
  } catch (error: any) {
<<<<<<< HEAD
    return null;
  }
};

export default getConversationById;
=======
    return null
  }
}

export default getConversationById;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
