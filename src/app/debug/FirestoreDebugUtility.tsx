"use client";

import React, { FormHTMLAttributes, useState } from 'react';

type CollectionOption = string


type FormAction = FormHTMLAttributes<HTMLFormElement>['action'];

type Props = {
	collections?: CollectionOption[]
	/** server action passed from a server component */
	saveDocAction: FormAction
	saveTimestampAction?: FormAction
}

const FirestoreDebugUtility: React.FC<Props> = ({ collections = [], saveDocAction, saveTimestampAction }) => {
	console.debug('firestore:collections', collections);

	const [selected, setSelected] = useState<string>('')

	return (
		<>
			<form action={saveDocAction} className="mt-4 flex flex-col gap-3 max-w-xl">
				<label className="text-sm font-medium text-gray-700 dark:text-gray-200">Collection</label>
				<select
					name="collection"
					value={selected}
					onChange={e => setSelected(e.target.value)}
					className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
					<option value="">Select a collection</option>
					{collections.map(c => (
						<option key={c} value={c}>{c}</option>
					))}
				</select>

				<label className="text-sm font-medium text-gray-700 dark:text-gray-200">Data (JSON or text)</label>
				<textarea name="data" placeholder='{"name":"Alice"} or plain text' className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 min-h-[80px]" />

				<div className="flex items-center gap-3">
					<button type="submit" disabled={!selected} className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50">
						Save to Firestore
					</button>
				</div>
			</form>

			{saveTimestampAction && (
				<form action={saveTimestampAction} className="mt-3">
					<button type="submit" className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 disabled:opacity-50">
						Save timestamp
					</button>
				</form>
			)}
		</>
	)
}

export default FirestoreDebugUtility



