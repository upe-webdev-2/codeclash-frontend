import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: any = {
  // unknown type that works with JWT. Last known type: NextAuthOptions
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   }
  // },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  }
};

export default NextAuth(authOptions);
