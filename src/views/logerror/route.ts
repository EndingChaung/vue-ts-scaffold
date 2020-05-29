const LogError = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./logerror.vue')), 'auth');

export default [
  {
    path: '/logerror',
    name: 'logerror__index',
    component: LogError
  }
];
