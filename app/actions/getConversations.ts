import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

const getConversations = async () => {
  const currentUser = await getCurrentUser();

<<<<<<< HEAD
  if (!currentUser) {
=======
  if(!currentUser) {
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    return [];
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
<<<<<<< HEAD
        lastMessageAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
=======
        lastMessageAt: 'desc'
      },
      where: {
        userIds: {
          has: currentUser.id
        }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
<<<<<<< HEAD
            seen: true,
          },
        },
      },
=======
            seen: true
          }
        }
      }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    });

    return conversations;
  } catch (error: any) {
<<<<<<< HEAD
    return [];
  }
};

export default getConversations;
=======
    return []
  }
}

export default getConversations;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
