import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "PageIndex" */ '../views/PageIndex'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "PageLogin" */ '../views/PageLogin'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "PageRegister" */ '../views/PageRegister'),
    },
  ],
});
