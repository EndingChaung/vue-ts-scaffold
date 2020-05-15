<template>
  <div class="error-wrap">
    <el-form
      size="small"
      :inline="true"
      :model="data.formInline"
      :rules="data.rules"
      ref="errorForm"
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
        <el-button type="primary" @click="onSubmit('errorForm')">
          查 询
        </el-button>
        <el-button @click="resetForm('errorForm')">重 置</el-button>
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
      <el-table-column align="center" prop="url" label="COS地址">
        <template slot-scope="scope">
          <el-tooltip
            :content="scope.row.url"
            placement="bottom"
            effect="light"
          >
            <span>{{ scope.row.url }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="FileName" label="文件名称">
        <template slot-scope="scope">
          <el-tooltip
            :content="scope.row.FileName"
            placement="bottom"
            effect="light"
          >
            <span>{{ scope.row.FileName }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="FileType"
        label="文件类型"
        width="120"
      >
        <template slot-scope="scope">
          <span>{{ data.fileTypes[scope.row.FileType - 1] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="WebsiteStatus"
        label="上传状态"
        width="120"
      >
        <template slot-scope="scope">
          <span>{{ data.pushTypes[scope.row.WebsiteStatus] }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Id" label="报告Id" width="120">
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="handleClick(scope.row)"
            >查看报告</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="report-pagination"
      background
      layout="prev, pager, next"
      :page-size="10"
      :total="data.total"
      :current-page="data.currentPage"
      @current-change="changePage"
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
          :src="data.byteData"
          controls="smallconsole"
          type="text/plain"
        />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" src="./error.ts"></script>

<style scoped lang="stylus">
@import './error.styl'
</style>
