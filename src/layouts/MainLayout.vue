<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MainLayoutData } from '@/types/index';
import { setToken } from '@/utils/common';

@Component({})
export default class MainLayout extends Vue {
  data: MainLayoutData = {
    isCollapse: false,
    editableTabsValue: '0',
    editableTabs: [
      {
        title: '数据统计',
        name: '1',
        content: 'Tab 1 content'
      },
      {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      },
      {
        title: 'Tab 3',
        name: '3',
        content: 'Tab 3 content'
      }
    ],
    tabIndex: 0
  };

  get keepAliveInclude() {
    return ['home'];
  }

  get keepAliveExclude() {
    return [];
  }

  get activeMenu(): string {
    return this.$route.path || this.$store.getters.navActive;
  }

  handleOpen(key: any, keyPath: any) {
    // console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    // console.log(key, keyPath);
  }
  handleSelect(key: any, keyPath: any) {
    const router: any = this.$router;
    router.push(key);
  }
  goActive(e: any) {
    // this.tabIndex = e;
  }
  addTab() {
    // this.tabIndex = e;
  }
  removeTab() {
    // this.tabIndex = e;
  }
  loginOut() {
    setToken('');
    const router: any = this.$router;
    router.replace('/login');
  }
}
</script>

<template>
  <el-container class="app-container">
    <el-header class="header-content">
      <div class="header-content-left">
        <img class="tencen-c" src="../assets/images/tencen-c.png" alt="" />
        <div class="line-h"></div>
        <img src="../assets/images/logo-bw.png" alt="" />
        <div class="isCollapse" @click="data.isCollapse = !data.isCollapse">
          <i
            :class="!data.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          ></i>
        </div>
      </div>
      <div class="header-content-right">
        <div class="account">
          <span>账号：</span>
          <span>admin</span>
        </div>
        <el-button @click="loginOut" size="mini" type="danger">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside
        :class="!data.isCollapse ? 'nav-aside' : 'isCollapse-nav-aside'"
      >
        <!-- <div class="isCollapse" @click="isCollapse = !isCollapse">
          <i :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div> -->
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          background-color="#161F30"
          text-color="#fff"
          active-text-color="#fff"
          @open="handleOpen"
          @select="handleSelect"
          @close="handleClose"
          :collapse="data.isCollapse"
        >
          <el-menu-item index="/main">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-submenu index="/report">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span slot="title">报告中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/registration">
                <i class="el-icon-user"></i>
                <span>注册报告</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/realname">
                <i class="el-icon-s-custom"></i>
                <span>实名报告</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/sign">
                <i class="el-icon-s-check"></i>
                <span>签署报告</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/error">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">问题日志</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="header-nav">
          <!-- <div class="tabs">
            <div
              class="tab-pane"
              v-for="(item, index) in editableTabs"
              :key="item.name + index"
              @click="goActive(index)"
            >
              {{ item.title }}
            </div>
            <div
              class="active-line"
              :style="{ left: tabIndex * 89 + 'px' }"
            ></div>
          </div> -->
        </div>
        <div class="main-container">
          <transition>
            <keep-alive
              :include="keepAliveInclude"
              ,
              :exclude="keepAliveExclude"
            >
              <router-view />
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="stylus" scoped>
.app-container
  height 100%
  .header-content
    height 70px !important
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom 5px solid #1AA094 !important
    .header-content-left, .header-content-right
      display flex
      flex-direction row
      align-items center
      img
        height 32px
      .tencen-c
        height 36px
      .line-h
        height 24px
        width 1px
        margin 0 20px
        background-color #C0C0C0
      .bq-logo
        padding-left 120px
        height 28px
      .account
        padding 0 20px
  .isCollapse
    text-align center
    padding-left 20px
    font-size 20px
  .el-header, .el-footer
    background-color #ffffff
    border-bottom 1px solid #E6E6E6
    color #333
  .el-aside
    background-color #161F30
    .el-menu-vertical-demo
      border-right 0
    i
      color #ffffff
  .nav-aside
    width 200px !important
    transition all .5s ease
  .isCollapse-nav-aside
    width 65px !important
    transition all .5s ease
  .el-main
    background-color #ffffff
    padding 0
    .header-nav
      .tabs
        display flex
        flex-direction row
        padding 12px 0
        border-bottom 1px solid #E6E6E6
        position relative
        .tab-pane
          cursor pointer
          width 88px
          text-align center
          border-right 1px solid #E6E6E6
        .active-line
          position absolute
          bottom -1px
          left 0
          height 1px
          width 89px
          background-color $main-color
          transition left .4s ease
    .main-container
      padding 20px
</style>
