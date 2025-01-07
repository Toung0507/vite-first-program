import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // base 代表我們要編譯的路徑，會有兩種 > 開發中(npm run dev)，產品路徑(npm run build/deploy)。下方是分開的寫法
    // 若沒有要分開設定，可直接寫上指令的路徑即可
    // production代表產品路徑 '/'代表開發中的路徑
    // ? '產品路徑' 代表github上的repo名稱 並加上/repo名稱/
    base: process.env.NODE_ENV === 'production' ? '/vite-first-program/' : '/',
    plugins: [react()],
})
