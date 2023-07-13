import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { discordClientId, discordClientSecret, googleClientId, googleClientSecret, secret } from "@/app/config";

export const authOptions = {
    providers:[
        GitHubProvider({
            clientId: discordClientId,
            clientSecret:discordClientSecret
        }),
        GoogleProvider({
            clientId:googleClientId,
            clientSecret:googleClientSecret
        })
    ],
    pages:{
        signIn: '/signin/',
    },
    secret:secret
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};