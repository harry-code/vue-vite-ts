import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import '~/libs/remtopx';

createApp(App).use(router).use(Antd).mount('#app');
