import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.LinkedIn({
      clientId: process.env.CLIENT_ID_LINKEDIN,
      clientSecret: process.env.CLIENT_SECRET_LINKEDIN,
    }),
    Providers.GitHub({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    user: {
      name: String,
      email: String,
      image: URL,
    },
  },
  jwt: {},
  callbacks: {
    signIn: async (user, account, profile) => {
      return true;
    },
    session: async (session, user) => {
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      return Promise.resolve(token);
    },
  },
  routes: {},
};

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;
