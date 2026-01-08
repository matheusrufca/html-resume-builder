import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JsonViewer: FC<{ data: any; }> = ({ data }) => (
	<pre className="whitespace-pre-wrap bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-3 rounded text-sm overflow-auto rounded">
		{JSON.stringify(data, null, 2)}
	</pre>
);

export default JsonViewer;