import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [vue(),
    // 添加JSX插件
    vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
    })
    ],
    // 添加库模式配置

    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SSYUI",
            fileName: "ssy-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
    },
});