// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',  // ✅ Habilita modo servidor
  adapter: vercel({}), // ✅ Adaptador de Vercel (pasar configuración aunque esté vacía)
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});