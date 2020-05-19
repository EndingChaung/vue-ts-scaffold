import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { base64ToBlob } from '@/utils/common';
import { RegistrationData } from '@/types/views/registration.interface';
import * as RejistrationApi from '@/api/rejistration';

@Component({})
export default class Rejistration extends Vue {
  // Getter
  // @Getter rejistration.author

  // Action
  @Action GET_LIST_DATA_ASYN: () => any;

  // data
  data: RegistrationData = {
    pageName: 'registration',
    drawer: false,
    loading: false,
    maxHeight: window.innerHeight - 265,
    byteData: undefined,
    rules: {
      accountId: [
        { required: true, message: '请输入AccountId', trigger: 'change' }
      ]
    },
    formInline: {
      accountId: ''
    },
    total: 0,
    currentPage: 1,
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
    this.getDataList(1, 1, 10);
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

  SearchRegisterReportInfo(accountId: string) {
    RejistrationApi.SearchRegisterReportInfo(accountId).then((res: any) => {
      this.data.tableData = res.reportModel;
      this.data.total = res.reportCount;
      this.data.loading = false;
    });
  }

  handleClick(row: any) {
    this.data.byteData = '';
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
    this.getDataList(1, val, 10);
  }

  // 提交表单筛选条件
  onSubmit(formName: string | number) {
    const ref: any = this.$refs[formName];
    ref.validate((valid: any) => {
      if (valid) {
        this.data.loading = true;
        const aId = this.data.formInline.accountId;
        this.SearchRegisterReportInfo(aId);
      } else {
        return false;
      }
    });
  }

  resetForm(formName: string | number) {
    const that = this;
    const ref: any = this.$refs[formName];
    this.data.currentPage = 1;
    ref.resetFields();
    that.getDataList(1, 1, 10);
  }
}
