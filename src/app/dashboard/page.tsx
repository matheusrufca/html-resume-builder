import { SignOutButton } from '@/components/buttons/auth/SignOutButton';
import { getAuthServerSession } from '@/lib/auth/server';
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
					<SignOutButton />
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
