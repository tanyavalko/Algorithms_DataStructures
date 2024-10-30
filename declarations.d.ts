declare module '*.scss' {
	const content: { [className: string]: string };
	export = content;
}

declare namespace NodeJS {
	export interface ProcessEnv {
		API_URL: string;
		API_ENVIRONMENT: 'development' | 'preview' | 'production';
		ENVIRONMENT: string;
		BUILD_ENVIRONMENT: 'development' | 'production';
	}
}
