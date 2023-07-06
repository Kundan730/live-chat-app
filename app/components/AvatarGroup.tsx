<<<<<<< HEAD
'use client';

import { User } from '@prisma/client';
import Image from 'next/image';
=======
'use client'

import { User } from "@prisma/client"
import Image from "next/image";
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be

interface AvatarGroupProps {
  users: User[];
}

<<<<<<< HEAD
const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
=======
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users = []
}) => {

>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
  const slicedUsers = users.slice(0, 3);

  const positionMap = {
    0: 'top-0 left-[12px]',
    1: 'bottom-0',
<<<<<<< HEAD
    2: 'bottom-0 right-0',
  };
=======
    2: 'bottom-0 right-0'
  }
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be

  return (
    <div
      className="
        relative
        h-11
        w-11
      "
    >
      {slicedUsers.map((user, index) => (
        <div
          key={user.id}
          className={`
            absolute
            inline-block
            rounded-full
            overflow-hidden
            h-[21px]
            w-[21px]
            ${positionMap[index as keyof typeof positionMap]}
          `}
        >
          <Image
            alt="Avatar"
            fill
            src={user?.image || '/images/placeholder.jpg'}
          />
        </div>
      ))}
    </div>
<<<<<<< HEAD
  );
};

export default AvatarGroup;
=======
  )
}

export default AvatarGroup
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
