import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from "vite-plugin-svgr";
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), glsl()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@types': path.resolve(__dirname, 'src/utils/types'),
      '@sections': path.resolve(__dirname, 'src/sections'),

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
