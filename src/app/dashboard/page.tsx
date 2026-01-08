import { SignOutButton } from '@/components/buttons/auth/SignOutButton';
import { getAuthServerSession } from '@/lib/auth/server';
import { isDev } from '@/lib/env';
import Link from 'next/link';
import { redirect } from 'next/navigation';


export default async function Dashboard() {
	const session = await getAuthServerSession();

	if (!session?.user) {
		redirect('/');
	}

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Header */}
			<header className="bg-white shadow dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
					<div className="flex flex-col">
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
						<p className="text-gray-600 dark:text-gray-400 mt-1">
							Welcome, <span className="font-semibold">{session.user.email}</span>
						</p>
					</div>
					<div className="flex items-center gap-3">
						{isDev && (
							<Link
								href="/debug"
								className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Debug
							</Link>
						)}
						<SignOutButton />
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto py-12 px-4">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
					<p className="text-gray-600 dark:text-gray-400">Your dashboard content goes here</p>
				</div>
			</main>
		</div>
	);
}
