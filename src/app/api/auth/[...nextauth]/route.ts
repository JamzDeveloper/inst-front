import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log(process.env.API_URL)
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        });

        // console.log(res);
        // tipar peticion de user
        const user = await res.json();
        if (res.ok && user) {
          // mostrar el encabezado de autorización en la consola
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, ...rest }) => {
      console.log("llego a jwt",token);
      if (user) token = user as unknown as { [key: string]: any };
      console.log(token);

      return token;
    },
    session: async ({ session, token }) => {
      console.log("pasoo por session");
      session.user = { ...token };
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
  secret: "supersecret",
  pages: {
    signIn: "/login",
  },
  cookies:{
    
  }
});

export { handler as GET, handler as POST };
