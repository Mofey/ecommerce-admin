import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: '/auth/error',  // Optional: Custom error page
  },
  session: {
    jwt: true,  // Use JWT sessions
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl; // Optional: redirect after successful sign-in
    },
  },
  debug: true,  // Enable debug mode for more logs
};

const handler = (req, res) => NextAuth(req, res, authOptions);

export const GET = handler;
export const POST = handler;