import { betterAuth } from "better-auth";
import { nextCookies } from 'better-auth/next-js';


export const auth = betterAuth({
	emailAndPassword: {
		enabled: false,
	},
	socialProviders: {
		google: {
			prompt: "select_account",
			clientId: process.env.BETTER_AUTH_GOOGLE_ID,
			clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET,
			mapProfileToUser: (profile) => ({
				...profile,
			})
		}
	},
	plugins: [nextCookies()],
});