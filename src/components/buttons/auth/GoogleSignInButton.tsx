'use client'

import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { googleSocialSignIn } from '@/lib/auth/client';
import { FC, useState } from 'react';
import { Button } from '../Button';

type Props = {
	onSuccess?: (result?: Record<string, unknown>) => void;
	onError?: (error: unknown) => void;
};

export const GoogleSignInButton: FC<Props> = ({ onSuccess, onError }) => {
	const [isLoading, setIsLoading] = useState(false);


	const handleGoogleSignIn = async () => {
		setIsLoading(true);

		try {
			const result = await googleSocialSignIn('/dashboard');
			onSuccess?.(result);
		} catch (error) {
			console.error('[auth]', error);
			onError?.(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			onClick={handleGoogleSignIn}
			isLoading={isLoading}
			className="flex gap-3 bg-white px-6 py-3 text-gray-700 border border-gray-300 hover:bg-gray-50"
		>
			<GoogleIcon />
			{isLoading ? 'Signing in...' : 'Sign in with Google'}
		</Button>
	);
};
