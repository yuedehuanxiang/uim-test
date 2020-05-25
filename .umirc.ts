import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // mock: false,
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
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
          path: '/home/user',
          component: './user',
        },
        {
          component: './404',
        },
      ],
    },
    // {
    //   path: '/',
    //   component: '@/layouts/SecurityLayout',
    // },
    // {
    //   component: './404',
    // },
  ]
});
