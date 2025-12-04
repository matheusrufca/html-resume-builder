'use client'

import { LoadingSpinner } from '@/components/icons/LoadingSpinner';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	isLoading?: boolean;
};

const variantStyles = {
	primary: 'bg-blue-600 hover:bg-blue-700',
	secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
	danger: 'bg-red-600 hover:bg-red-700',
} as const;

const variantTextColors = {
	primary: 'text-white',
	secondary: 'text-gray-900',
	danger: 'text-white',
} as const;

const sizeStyles = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-6 py-3 text-lg',
} as const;

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			variant = 'primary',
			size = 'md',
			isLoading = false,
			disabled,
			children,
			className = '',
			...props
		},
		ref
	) => {
		const hasCustomTextColor = className?.includes('text-');
		const textColor = hasCustomTextColor ? '' : variantTextColors[variant];

		return (
			<button
				ref={ref}
				disabled={disabled || isLoading}
				className={`${className} inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed ${variantStyles[variant]} ${textColor} ${sizeStyles[size]}`}
				{...props}
			>
				{isLoading ? (
					<>
						<LoadingSpinner className="-ml-1 mr-2 h-4 w-4" />
						Loading...
					</>
				) : (
					children
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';