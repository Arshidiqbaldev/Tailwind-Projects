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
                modernButton: "modern-button.html",
                modernMenu: "modern-menu.html",
                cards: "cards.html",
                navBars: "navbars.html",
                mPage: "Modern-page.html",
                leetCode : "leetcode.html",
                
            },
        },
    },
})