import { headers } from 'next/headers';
import { auth } from './auth.config';


export type AuthSession = Awaited<ReturnType<typeof auth.api.getSession>>;

export const getAuthServerSession = async (): Promise<AuthSession> => {
	return await auth.api.getSession({
		headers: await headers()
	})
}

