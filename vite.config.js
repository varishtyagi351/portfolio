import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

  //   //https://vitejs.dev/config/
    //   export default defineConfig({
    //   plugins: [react()],
    // })

 // vite.config.js
   export default defineConfig({
    plugins: [react()],
   
   // ...
   build: {
     chunkSizeWarningLimit: 2000, // Set a custom size limit in kilobytes
   },
   });


