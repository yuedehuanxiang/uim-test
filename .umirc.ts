import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './login',
        },
      ],
    },
    {
      path: '/home',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/home/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/',
      component: '@/layouts/SecurityLayout',
    },
    {
      component: './404',
    },
  ]
});
