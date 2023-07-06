<<<<<<< HEAD
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function getSession() {
  return await getServerSession(authOptions);
}
=======
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOptions)
}
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
