import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginMd2Vue from 'vite-plugin-md2vue';
import { vitePluginVueReturnSourceCode } from './plugins/vitePluginVueReturnSourceCode';
// https://vitejs.dev/config/

export default defineConfig({
  base: '/allen-ui-website/', // needed for deploy to github pages
  plugins: [vue(), vitePluginMd2Vue(), vitePluginVueReturnSourceCode()],
});
