import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginRoutes from './modules/login';
import ErrorRoutes from './modules/error';

const historyMode = createWebHistory();

const router = createRouter({
  history: historyMode,
  routes: [...LoginRoutes, ...ErrorRoutes],
});

export default router;
