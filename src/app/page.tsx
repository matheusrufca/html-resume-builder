
import { GoogleSignInButton } from '@/components/buttons/auth/GoogleSignInButton';
import { getAuthServerSession } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export default async function Home() {
	const session = await getAuthServerSession();

	if (session?.user) {
		redirect('/dashboard');
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
			<main className='flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-12 py-16 shadow-2xl dark:bg-gray-800'>
				<div className='text-center'>
					<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
						Resume Builder
					</h1>
					<p className='text-gray-600 dark:text-gray-400'>
						Create your professional resume in minutes
					</p>
				</div>

				<GoogleSignInButton />

				<p className='text-xs text-gray-500 dark:text-gray-400 text-center max-w-sm'>
					We&apos;ll never post to your Google account without your permission
				</p>
			</main>
		</div>
	);
}
