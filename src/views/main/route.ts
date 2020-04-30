const Main = (r: (arg0: any) => void) =>
  require.ensure([], () => r(require('./main.vue')), 'auth');

export default [
  {
    path: '/main',
    name: 'main__index',
    component: Main
  }
];
