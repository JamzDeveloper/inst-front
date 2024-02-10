import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { options } from "./options";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at?: any;
  iat: number;
  exp: number;
  jti: string;
}

const handler = NextAuth(options);

export { handler as GET, handler as POST };
