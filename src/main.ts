import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '~/libs/remtopx';

createApp(App).use(router).mount('#app');
