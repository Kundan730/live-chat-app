import prisma from '@/app/libs/prismadb';
import getSession from './getSession';

const getUsers = async () => {
  const session = await getSession();

<<<<<<< HEAD
  if (!session?.user?.email) {
=======
  if(!session?.user?.email) {
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
<<<<<<< HEAD
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
=======
        createdAt: 'desc'
      },
      where: {
        NOT: {
          email: session.user.email
        }
      }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
    });

    return users;
  } catch (error: any) {
    return [];
  }
<<<<<<< HEAD
};

export default getUsers;
=======
}

export default getUsers;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
