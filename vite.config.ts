import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
       build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                lineNav: 'line-nav.html',
                animatedSpinner: "animated-spinner.html",
                modernButton: "modren-button.html",
                
            },
        },
    },
})