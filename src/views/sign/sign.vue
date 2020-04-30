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
      <el-form-item label="合同唯一标识：">
        <el-input
          v-model="data.formInline.region"
          placeholder="请填写合同编号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查 询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="data.tableData" border style="width: 100%">
      <el-table-column
        align="center"
        fixed
        prop="date"
        label="日期"
        width="150"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="120"
      ></el-table-column>
      <el-table-column align="center" prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column align="center" prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column align="center" prop="zip" label="邮编" width="120">
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
