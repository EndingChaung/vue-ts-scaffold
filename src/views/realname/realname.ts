import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { base64ToBlob } from '@/utils/common';
import { RealnameData } from '@/types/views/realname.interface';
import * as RejistrationApi from '@/api/rejistration';
import * as RealnameApi from '@/api/realname';

@Component({})
export default class Realname extends Vue {
  // Getter
  // @Getter realname.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: RealnameData = {
    pageName: 'realname',
    maxHeight: window.innerHeight - 265,
    drawer: false,
    loading: false,
    byteData: undefined,
    total: 0,
    currentPage: 1,
    formInline: {
      accountId: ''
    },
    tableData: []
  };

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    this.data.loading = true;
    this.getDataList(2, 1, 10);
  }

  // 初始化函数
  init() {
    //
  }

  getDataList(type: number, page: number, pageCount: number) {
    RejistrationApi.getListData(type, page, pageCount).then((res: any) => {
      this.data.tableData = res.reportModel;
      this.data.total = res.reportCount;
      this.data.loading = false;
    });
  }

  SearchRealNameReportInfo(accountId: string) {
    RealnameApi.SearchRealNameReportInfo(accountId).then((res: any) => {
      this.data.tableData = res.reportModel;
      this.data.total = res.reportCount;
      this.data.loading = false;
    });
  }

  handleClick(row: any) {
    this.data.drawer = true;
    RejistrationApi.downReport(row.Id).then((res: any) => {
      const base64 = res.downReportModel.FileByte;
      base64ToBlob(base64, 'application/pdf').then(result => {
        const url = URL.createObjectURL(result);
        this.data.byteData = url;
      });
    });
  }

  changePage(val: any) {
    this.data.currentPage = val;
    this.getDataList(2, val, 10);
  }

  // 提交表单筛选条件
  onSubmit() {
    this.data.loading = true;
    const aId = this.data.formInline.accountId;
    this.SearchRealNameReportInfo(aId);
  }

  resetForm(formName: string | number) {
    const that = this;
    const ref: any = this.$refs[formName];
    ref.resetFields();
    that.getDataList(2, 1, 10);
  }
}
