import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { SignData } from '@/types/views/sign.interface';
import * as RejistrationApi from '@/api/rejistration';

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
    total: 0,
    maxHeight: window.innerHeight - 265,
    formInline: {
      user: '',
      region: ''
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
    RejistrationApi.getListData(3, 1, 10).then((res: any) => {
      this.data.tableData = res.reportModel;
      this.data.total = res.reportCount;
      this.data.loading = false;
    });
  }

  // 初始化函数
  init() {
    //
  }

  handleClick(index: any, row: any) {
    this.data.drawer = true;
  }

  onSubmit() {
    console.log('submit!', this.data.formInline);
  }
}
