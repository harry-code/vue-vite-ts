import { RouteRecordRaw } from 'vue-router';

const Login = () => import('~/views/login/index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login,
  },
];

export default routes;
