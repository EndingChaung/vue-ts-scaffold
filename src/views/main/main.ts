import { Component, Vue } from 'vue-property-decorator';
import { formatDate, getDate } from '@/utils/common';
import { MainData } from '@/types/views/main.interface';
import * as MainApi from '@/api/main';
import { DateType } from 'element-ui/types/calendar';

@Component({})
export default class Main extends Vue {
  // Getter
  // @Getter main.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: MainData = {
    pageName: 'main',
    T_ErrorlogNumber: 0,
    IssueReportNumber: 0,
    IssueLogNumber: 0,
    CosReportNumber: 0,
    CosLogNumber: 0,
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
    }
  };

  created() {
    const end = getDate('yyyy-MM-dd HH:mm:ss');
    const star = '1990-01-01 00:00:00';
    this.getData(star, end);
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }

  getData(StartTime: Date | string, EndTime: Date | string) {
    MainApi.ReportStatistics(StartTime, EndTime).then((res: any) => {
      this.data.CosLogNumber = res.CosLogNumber;
      this.data.CosReportNumber = res.CosReportNumber;
      this.data.IssueLogNumber = res.IssueLogNumber;
      this.data.IssueReportNumber = res.IssueReportNumber;
      this.data.T_ErrorlogNumber = res.T_ErrorlogNumber;
    });
  }

  onSubmit(formName: string | number) {
    const ref: any = this.$refs[formName];
    ref.validate((valid: any) => {
      if (valid) {
        const sTime = this.data.formInline.timeRange[0];
        const eTime = this.data.formInline.timeRange[1];
        this.getData(sTime, eTime);
      } else {
        console.log('error submit!!');
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
    this.getData(star, end);
  }
}
