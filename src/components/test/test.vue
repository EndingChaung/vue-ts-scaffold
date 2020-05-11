<template>
  <div class="test-wrap">
    <button class="login-btn" @click="signIn">点击登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { TestData } from '@/types/components/test.interface';
import { setToken } from '@/utils/common';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop({
    required: false,
    default: ''
  })
  name!: string;

  // data
  data: TestData = {
    componentName: 'test'
  };

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  signIn() {
    setToken('123456');
    const router: any = this.$router;
    router.push('/main');
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/variables.styl";

.test-wrap
  width 100%
</style>
