const Error = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./error.vue')), 'auth');

export default [
  {
    path: '/error',
    name: 'error__index',
    component: Error
  }
];
