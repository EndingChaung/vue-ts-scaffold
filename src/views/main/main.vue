<template>
  <div class="main-wrap">
    <el-form
      size="small"
      :inline="true"
      :model="data.formInline"
      :rules="data.rules"
      ref="mainForm"
      class="demo-form-inline"
    >
      <el-form-item prop="timeRange" label="时间段：">
        <el-date-picker
          type="datetimerange"
          :picker-options="data.pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
          value-format="yyyy-MM-dd HH:mm:ss"
          v-model="data.formInline.timeRange"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('mainForm')">
          查 询
        </el-button>
        <el-button @click="resetForm('mainForm')">重 置</el-button>
      </el-form-item>
    </el-form>
    <div class="label-main">COS盘数量统计</div>
    <el-row :gutter="20" class="number-tab">
      <el-col :span="6">
        <div class="grid-content bg-purple main-tab">
          <span>COS报告数量：</span>
          <span class="count-number">{{ data.CosReportNumber }}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple main-tab">
          <span>COS日志数量：</span>
          <span class="count-number">{{ data.CosLogNumber }}</span>
        </div>
      </el-col>
    </el-row>
    <div class="label-main">上传失败操作统计</div>
    <el-row :gutter="20" class="number-tab">
      <el-col :span="6">
        <div class="grid-content bg-purple main-tab">
          <span>报告上传失败数量：</span>
          <span class="count-number">{{ data.IssueReportNumber }}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple main-tab">
          <span>日志原文上传失败数量：</span>
          <span class="count-number">{{ data.IssueLogNumber }}</span>
        </div>
      </el-col>
    </el-row>
    <div class="label-main">问题日志统计</div>
    <el-row :gutter="20" class="number-tab">
      <el-col :span="6">
        <div class="grid-content bg-purple main-tab">
          <span>问题日志数量：</span>
          <span class="count-number">{{ data.T_ErrorlogNumber }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" src="./main.ts"></script>

<style scoped lang="stylus">
@import './main.styl'
</style>
