const PushLogError = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./pusherror.vue')), 'auth');

export default [
  {
    path: '/pusherror',
    name: 'pusherror__index',
    component: PushLogError
  }
];
