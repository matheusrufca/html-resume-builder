/**
 * Environment variable typings for this project.
 *
 * Keep this file in `src/types` (or a folder included by `tsconfig.json`) so
 * TypeScript picks up the global augmentation. Update the keys below to match
 * your `.env` file.
 */
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BETTER_AUTH_SECRET: string;
			BETTER_AUTH_URL: string;
			BETTER_AUTH_GOOGLE_ID: string;
			BETTER_AUTH_GOOGLE_SECRET: string;

			/**
			 * Firebase Admin service account JSON (single-line JSON string).
			 * Prefer storing this in a secret and not committing it to source.
			 */
			FIREBASE_SERVICE_ACCOUNT?: string;

			/**
			 * Client-side Firebase config (public) — prefixed with NEXT_PUBLIC_ so
			 * they are exposed to the browser by Next.js when needed.
			 */
			NEXT_PUBLIC_FIREBASE_API_KEY: string;
			NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
			NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
			NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
			NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
			NEXT_PUBLIC_FIREBASE_APP_ID: string;
			NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;

			/** Standard Node environment */
			NODE_ENV?: 'development' | 'production' | 'test';
			/** Optional port for local servers */
			PORT?: string;
		}
	}
}

export { };

