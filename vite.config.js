import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], //voy a trabajar con react
    base: '/bloom-estudio/', // ruta base del proyecto para github pages
})
