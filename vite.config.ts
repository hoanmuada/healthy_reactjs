import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      checker({
        typescript: true,
      }),
      tsconfigPaths(),
      eslint(),
    ],
    server: {
      port: Number(env.PORT) || 1411,
    },
  };
});
