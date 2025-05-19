import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/*'),
      '@app': path.resolve(__dirname, 'src/app/*'),
      '@assets': path.resolve(__dirname, 'src/assets/*'),
      '@components': path.resolve(__dirname, 'src/components/*'),
      '@hooks': path.resolve(__dirname, 'src/hooks/*'),
      '@utils': path.resolve(__dirname, 'src/utils/*'),
      '@types': path.resolve(__dirname, 'src/utils/types/*'),

      '@scss': path.resolve(__dirname, 'src/scss')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@scss/variables" as *; @use "@scss/mixins" as *;`
      },
    }
  }
})
