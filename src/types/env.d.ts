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

			/** Standard Node environment */
			NODE_ENV?: 'development' | 'production' | 'test';
			/** Optional port for local servers */
			PORT?: string;
		}
	}
}

export { };

