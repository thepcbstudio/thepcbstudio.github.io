import * as child from 'node:child_process';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import tsconfigPaths from 'vite-tsconfig-paths';

const commitHash = child.execSync('git rev-parse --short HEAD').toString();

export default defineConfig({
	// biome-ignore lint/style/useNamingConvention: ignore
	define: { __COMMIT_HASH__: JSON.stringify(commitHash) },
	plugins: [devtoolsJson(), reactRouter(), tsconfigPaths()],
});
