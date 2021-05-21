import { createRouter, createWebHistory } from 'vue-router';
const Login = () => import('~/views/login/index.vue');

const historyMode = createWebHistory();

const router = createRouter({
  history: historyMode,
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: {},
    },
  ],
});

export default router;
