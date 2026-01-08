import admin, { ServiceAccount } from 'firebase-admin';
import { Firestore } from 'firebase-admin/firestore';



const getServiceAccount = (): ServiceAccount => {
	const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

	if (!serviceAccountJson) {
		// TODO: add custom error
		throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not set.');
	}

	return JSON.parse(serviceAccountJson) as ServiceAccount;
}


export const initFirebaseAdmin = (): void => {
	if (admin.apps && admin.apps.length) {
		console.warn('Firebase admin already initialized');
	}

	try {
		const serviceAccount = getServiceAccount();

		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	} catch (error: unknown) {
		// TODO: add custom error
		throw error;
	}
}

export function getFirestore(): Firestore {
	try {
		return admin.firestore();
	} catch (error: unknown) {
		console.error('Error getting Firestore instance:', error);
		throw error;
	}
}



export const getCollection = (collection: string) => {
	return getFirestore().collection(collection);
}

export const getDocument = (collection: string, docId: string) => {
	return getCollection(collection).doc(docId);
}