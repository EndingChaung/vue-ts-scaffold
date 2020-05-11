<template>
  <div class="sign-wrap">
    <el-form
      size="small"
      :inline="true"
      :model="data.formInline"
      class="demo-form-inline"
    >
      <el-form-item label="用户唯一标识：">
        <el-input
          v-model="data.formInline.user"
          placeholder="请填写AccoundId"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查 询</el-button>
        <el-button>重 置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="data.loading"
      element-loading-text="数据加载中"
      element-loading-custom-class="self-loading"
      :data="data.tableData"
      border
      :max-height="data.maxHeight"
      style="width: 100%"
    >
      <el-table-column
        align="center"
        fixed
        prop="CreateDate"
        label="日期"
        width="150"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="AccountId"
        label="用户编号"
        width="220"
      ></el-table-column>
      <el-table-column align="center" prop="ReportName" label="报告名称">
      </el-table-column>
      <!-- <el-table-column
        align="center"
        prop="ReportType"
        label="报告类型"
        width="120"
      >
      </el-table-column> -->
      <el-table-column align="center" prop="Id" label="报告Id" width="120">
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            @click="handleClick(scope.$index, scope.row)"
            >查看报告</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="report-pagination"
      background
      layout="prev, pager, next"
      :total="data.total"
    >
    </el-pagination>
    <el-drawer
      title="报告预览"
      size="40%"
      :visible.sync="data.drawer"
      :with-header="false"
    >
      <div class="pdf-drawer">
        <embed
          class="embed-sty"
          src="http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
          controls="smallconsole"
          type="application/pdf"
        />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" src="./sign.ts"></script>

<style scoped lang="stylus">
@import './sign.styl'
</style>
