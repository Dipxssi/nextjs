import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    CredentialProvider({
      name: "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "dipshagmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const username = credentials?.username;
        const password = credentials?.password;
        //db requester to check if this username and password are correct
        console.log(username);
        console.log(password);

        const user = {
          name: "dipsha",
          id: "1",
          username: "dipsha@gmail.com"
        }

        if (user) {
          return user;
        }
        else {
          return null;
        }
      }
    }),
    

  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }