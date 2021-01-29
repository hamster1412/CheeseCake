import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    }),
    Providers.LinkedIn({
      clientId: process.env.CLIENT_ID_LINKEDIN,
      clientSecret: process.env.CLIENT_SECRET_LINKEDIN,
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {},
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
  routes:{
    //signIn:
    //signOut:
    //error:
    //newUser: null, redirect to signUp
  }
};

const Auth = (req, res) => NextAuth(req, res, options)
export default Auth;