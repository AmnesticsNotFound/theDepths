import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  /*build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
      },
    }
  },
  plugins: [react(),tailwindcss()],
  define: {
    global: {}},*/

    plugins: [react(), tailwindcss()],
  // Removed the manual build/external block
  define: {
    // Only keep this if a specific library requires it
    // global: {}
  },
})
