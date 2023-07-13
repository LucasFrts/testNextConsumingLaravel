const discordClientId:string        = process.env.GITHUB_CLIENT_ID ?? '';
const discordClientSecret:string    = process.env.GITHUB_CLIENT_SECRET ?? '';
const googleClientId:string         = process.env.GOOGLE_CLIENT_ID ?? '';
const googleClientSecret:string     = process.env.GOOGLE_CLIENT_SECRET ?? '';
const secret:string                 = process.env.SECRET ?? '';

export {discordClientId, discordClientSecret, googleClientId, googleClientSecret, secret}