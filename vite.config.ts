import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // CSS 预处理器的配置
      less: {
        // less-loader 中开启 javascriptEnabled
        javascriptEnabled: true,
        // 使用 less 的 modifyVar 来覆盖 less 变量
        modifyVars: {},
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
