'use client'

import { signOut } from '@/lib/auth/client/auth.actions';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { Button } from '../Button';

export const SignOutButton: FC = () => {
	const handleSignOut = async () => {
		await signOut()
			.then((result) => {
				console.debug('[auth:sign-out]', result);

				setTimeout(() => {
					redirect('/');
				}, 100);
			})
			.catch((error) => {
				console.error('[auth:sign-out]', error);
			});
	};

	return (
		<Button onClick={handleSignOut} className="px-4 py-2" >
			Logout
		</Button>
	);
}