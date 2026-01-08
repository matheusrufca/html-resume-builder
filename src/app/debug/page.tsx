import { getCollections, readDebugTimestamp, saveDebugTimestamp, saveToCollection } from '@/app/debug/firestore.actions'
import FirestoreDebugUtility from './FirestoreDebugUtility'

// server action to save posted debug data
async function saveAction(formData: FormData) {
	'use server'
	const collection = formData.get('collection')?.valueOf()
	if (!collection) {
		console.warn('saveAction called without a collection')
		return
	}
	const payload = formData.get('data');
	try {
		await saveToCollection(collection as string, payload);
		console.debug('Saved data to collection', collection);
	} catch (error: unknown) {
		console.error('Error saving to collection', collection, error);
	}
}

async function saveTimestampAction() {
	'use server'
	await saveDebugTimestamp();
	const timestamp = await readDebugTimestamp();
	console.debug('Read timestamp data:', timestamp);
}

/** Development-only debug page */
export default async function DebugPage() {
	const firestoreCollections = await getCollections()

	return (
		<div style={{ padding: 16 }}>

			<FirestoreDebugUtility
				collections={firestoreCollections}
				saveDocAction={saveAction}
				saveTimestampAction={saveTimestampAction}
			/>

		</div>
	)
}
