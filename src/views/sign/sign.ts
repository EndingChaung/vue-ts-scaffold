import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { base64ToBlob } from '@/utils/common';
import { SignData } from '@/types/views/sign.interface';
import * as RejistrationApi from '@/api/rejistration';
import * as SignApi from '@/api/sign';
import { SearchRealNameReportInfo } from '../../api/realname';

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter sign.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: SignData = {
    pageName: 'sign',
    drawer: false,
    loading: false,
    byteData: undefined,
    total: 0,
    currentPage: 1,
    maxHeight: window.innerHeight - 265,
    formInline: {
      accountId: '',
      countractId: ''
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
    this.getDataList(3, 1, 10);
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

  searchReportInfo(accountId: string, contractNo: string) {
    SignApi.SearchSignReport(accountId, contractNo).then((res: any) => {
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
    this.getDataList(3, val, 10);
  }

  onSubmit() {
    this.data.loading = true;
    const aId = this.data.formInline.accountId;
    const cId = this.data.formInline.countractId;
    this.searchReportInfo(aId, cId);
  }

  resetForm(formName: string | number) {
    const that = this;
    const ref: any = this.$refs[formName];
    ref.resetFields();
    that.getDataList(3, 1, 10);
  }
}
