/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
import Main from '@/views/main/route';
import Registration from '@/views/registration/route';
import RealnameData from '@/views/realname/route';
import Sign from '@/views/sign/route';
import ErrorR from '@/views/error/route';

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layouts/MainLayout.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'Layout'
    },
    children: [...Main, ...Registration, ...RealnameData, ...Sign, ...ErrorR]
  }
];
