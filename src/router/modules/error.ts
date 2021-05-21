import { RouteRecordRaw } from 'vue-router';

const ErrorPage = () => import('~/components/error/404.vue');

const errorRoutes: Array<RouteRecordRaw> = [
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },
];
export default errorRoutes;
