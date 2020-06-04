/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
// import Main from '@/views/main/route';

export default [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'index',
    },
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/layouts/MainLayout.vue'),
  //   meta: {
  //     icon: '',
  //     keepAlive: true,
  //     title: 'Layout'
  //   },
  //   children: [
  //     ...Main,
  //   ]
  // }
];
