import { getAuthClient } from './auth.client';


const authClient = getAuthClient();

export const googleSocialSignIn = async (redirectURL: string = '/') => {
	return await authClient.signIn.social({
		provider: 'google',
		callbackURL: redirectURL,
	});
}

export const signOut = async () => {
	return await authClient.signOut();
};
