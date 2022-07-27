import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import alias from '@rollup/plugin-alias';
import tsconfigPaths from 'vite-tsconfig-paths'
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, `${__dirname}/vars`, '')

  return {
    envDir: `./vars`,
    envPrefix: 'ENV',
    plugins: [react(), tsconfigPaths()],
    base: '',
    server: {
      port: env.DEV_PORT
    }
  }
})
