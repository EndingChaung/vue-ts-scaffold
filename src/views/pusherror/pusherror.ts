import { PushErrorData } from '@/types/views/pusherror.interface';
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { base64ToBlob, getDate } from '@/utils/common';
import * as PushErrorApi from '@/api/pusherror';

@Component({})
export default class Realname extends Vue {
  // Getter
  // @Getter realname.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: PushErrorData = {
    pageName: 'error',
    maxHeight: window.innerHeight - 265,
    drawer: false,
    loading: false,
    byteData: undefined,
    total: 0,
    currentPage: 1,
    fileTypes: ['注册日志', '个人实名日志', '签署日志'],
    pushTypes: ['失败', '成功'],
    formInline: {
      timeRange: []
    },
    rules: {
      timeRange: [
        { required: true, message: '请输入筛选时间段', trigger: 'change' }
      ]
    },
    pickerOptions: {
      shortcuts: [
        {
          text: '最近一周',
          onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        },
        {
          text: '最近一个月',
          onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        },
        {
          text: '最近三个月',
          onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }
      ]
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
    const end = getDate('yyyy-MM-dd HH:mm:ss');
    const star = '1990-01-01 00:00:00';
    this.getDataList(star, end, 1, 10);
  }

  // 初始化函数
  init() {
    //
  }

  getDataList(
    StartTime: Date | string,
    EndTime: Date | string,
    page: number,
    pageCount: number
  ) {
    PushErrorApi.SearchLogList(StartTime, EndTime, page, pageCount).then(
      (res: any) => {
        this.data.tableData = res.fileLogModel;
        this.data.total = res.logCount;
        this.data.loading = false;
      }
    );
  }

  handleClick(row: any) {
    this.data.drawer = true;
    PushErrorApi.DownloadLog(row.Id).then((res: any) => {
      const base64 = res.downFileModel.FileByte;
      base64ToBlob(base64, 'text/plain').then(result => {
        const url = URL.createObjectURL(result);
        this.data.byteData = url;
      });
    });
  }

  changePage(val: any) {
    this.data.currentPage = val;
    const sTime = this.data.formInline.timeRange[0] || '1990-01-01 00:00:00';
    const eTime =
      this.data.formInline.timeRange[1] || getDate('yyyy-MM-dd HH:mm:ss');
    this.getDataList(sTime, eTime, val, 10);
  }

  onSubmit(formName: string | number) {
    const ref: any = this.$refs[formName];
    ref.validate((valid: any) => {
      if (valid) {
        const sTime = this.data.formInline.timeRange[0];
        const eTime = this.data.formInline.timeRange[1];
        this.getDataList(sTime, eTime, this.data.currentPage, 10);
      } else {
        return false;
      }
    });
  }

  resetForm(formName: string | number) {
    // 重置搜索框
    const ref: any = this.$refs[formName];
    ref.resetFields();
    // 重新获取数值
    const end = getDate('yyyy-MM-dd HH:mm:ss');
    const star = '1990-01-01 00:00:00';
    this.getDataList(star, end, 1, 10);
  }
}
