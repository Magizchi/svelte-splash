import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 5173,
		hmr: {
			port: 5173,
		},
		watch: {
			usePolling: true
		},
	}
}
export default config;
