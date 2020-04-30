<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
  </div>
</template>

<style lang="stylus">
@import './assets/stylus/variables.styl';

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  height 100%
</style>
