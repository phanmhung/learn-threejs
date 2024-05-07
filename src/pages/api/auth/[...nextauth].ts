import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  callbacks: {
    async signIn({user}) {
      const {email, name, image} = user;
      const response = await fetch('http://localhost:3000/api/profile', {
        method: 'POST',
        body: JSON.stringify({email, name, image}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
      return true;
      
    },
  },

});
