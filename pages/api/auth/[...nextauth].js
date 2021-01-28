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
};

export default (req, res) => NextAuth(req, res, options);
