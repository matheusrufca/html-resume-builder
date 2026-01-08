import { initFirebaseAdmin } from '@/lib/firestore/server';


/**
 * Initialize application-level services required on the server.
 */
export const initApp = (): void => {
	try {
		initFirebaseAdmin();
	} catch (err) {
		console.error('App initialization failed:', err);
	}
}

export default initApp;
