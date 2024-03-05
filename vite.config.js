import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        global: 'globalThis'
    },
    root: 'example',
    publicDir: '_public',
    css: {
        postcss: {
            plugins: [
                postcssNesting
            ],
        },
    },
    server: {
        port: 8888,
        host: true,
        open: true,
    },
    build: {
        minify: false,
        outDir: '../public',
        emptyOutDir: true,
        sourcemap: 'inline'
    }
})
