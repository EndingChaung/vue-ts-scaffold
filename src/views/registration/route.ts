const Registration = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./registration.vue')), 'auth');

export default [
  {
    path: '/registration',
    name: 'registration__index',
    component: Registration
  }
];
