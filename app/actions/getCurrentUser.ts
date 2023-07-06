import prisma from '@/app/libs/prismadb';
import getSession from './getSession';

const getCurrentUser = async () => {
  try {
    const session = await getSession();
<<<<<<< HEAD
    if (!session?.user?.email) {
=======
    if(!session?.user?.email) {
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
<<<<<<< HEAD
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
=======
        email: session.user.email as string
      }
    });

    if(!currentUser) {
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
      return null;
    }

    return currentUser;
<<<<<<< HEAD
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
=======

  } catch (error: any) {
    return null
  }
}

export default getCurrentUser;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
