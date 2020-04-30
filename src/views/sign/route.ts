const Sign = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./sign.vue')), 'auth');

export default [
  {
    path: '/sign',
    name: 'sign__index',
    component: Sign
  }
];
