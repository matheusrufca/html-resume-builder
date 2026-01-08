import { getDocument, getFirestore } from '@/lib/firestore/server';

export async function getCollections(): Promise<string[]> {
	const collections = await getFirestore().listCollections()
	return collections.map(({ id }) => id)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveToCollection(collection: string, data: any) {
	if (typeof data === 'object' && data !== null) {
		data.createdAt = new Date().toISOString()
	}

	const docRef = await getFirestore()
		.collection(collection)
		.add({
			payload: data,
		});

	return docRef.id
}

export async function saveDebugTimestamp() {
	const docRef = getDocument('debug', 'timestamp');
	const now = new Date().toISOString();
	// store as a single-field object with key `value` (Firestore documents must be objects)
	await docRef.set({ value: now }, { merge: true });
}

export async function readDebugTimestamp() {
	const docRef = getDocument('debug', 'timestamp');
	const document = await docRef.get();
	if (!document.exists) return null;
	const timestamp = document.get('value');
	return timestamp ?? '';
};
