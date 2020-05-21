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
      path: '/',
      component: '@/layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '@/layouts/BasicLayout',
          // authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              // icon: 'smile',
              component: './welcome',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    // {
    //   exact: false, path: '/', component: '@/layouts/index',
    //   routes: [
    //     { exact: true, path: '/login', component: '@/pages/login' },
    //     { exact: true, path: '/users', component: '@/pages/user' },
    //   ],
    // },
  ]
});
