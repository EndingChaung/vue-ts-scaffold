<template>
  <div class="login-wrap">
    <div class="container right-panel-active">
      <div class="form-container sign-in-container">
        <div class="form-content">
          <el-form :model="data.form">
            <h1>Sign In</h1>
            <!-- <span>Sign In</span> -->
            <br />
            <el-form-item class="center-form-item">
              <el-input
                placeholder="请输入用户名"
                v-model="data.form.name"
              ></el-input>
            </el-form-item>
            <el-form-item class="center-form-item">
              <el-input
                placeholder="请输入密码"
                v-model="data.form.pass"
              ></el-input>
            </el-form-item>
            <a href="#">没有账号？请联系实槌系统管理员。</a>
            <!-- <el-form-item class="center-form-item">
              <button @click="doSubmit">Sign In</button>
            </el-form-item> -->
          </el-form>
          <button @click="doSubmit">Sign In</button>
        </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>你好, 欢迎访问 ！</h1>
            <p></p>
            <p>
              <span>
                请输入你的管理账号信息，登录系统查询系统保全信息。
              </span>
              <br />
              <span>
                Please enter your management account information, login system
                query system security information
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="stylus">
@import './login.styl';
</style>
