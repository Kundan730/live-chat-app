'use client';

<<<<<<< HEAD
import type { User } from '@prisma/client';

import useActiveList from '../hooks/useActiveList';
import Image from 'next/image';

interface AvatarProps {
  user?: User;
}
=======
import type { User } from "@prisma/client";

import useActiveList from "../hooks/useActiveList";
import Image from "next/image";

interface AvatarProps {
  user?: User;
};
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
<<<<<<< HEAD
      <div
        className="
=======
      <div className="
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
<<<<<<< HEAD
      "
      >
=======
      ">
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
        <Image
          fill
          src={user?.image || '/images/placeholder.jpg'}
          alt="Avatar"
        />
      </div>
<<<<<<< HEAD

      {isActive ? (
        <span
=======
      {isActive ? (
        <span 
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
          className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
<<<<<<< HEAD
          "
=======
          " 
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
        />
      ) : null}
    </div>
  );
<<<<<<< HEAD
};

export default Avatar;
=======
}

export default Avatar;
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
