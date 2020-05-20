import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false, path: '/', component: '@/layouts/index',
      routes: [
        { exact: true, path: '/login', component: '@/pages/login' },
        { exact: true, path: '/users', component: '@/pages/user' },
      ],
    },
  ]
});
