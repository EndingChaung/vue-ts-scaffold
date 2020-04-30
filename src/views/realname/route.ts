const Realname = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./realname.vue')), 'auth');

export default [
  {
    path: '/realname',
    name: 'realname__index',
    component: Realname
  }
];
