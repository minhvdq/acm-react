import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import homeUrl from './src/utils/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${homeUrl}`
  // base: './'
})
