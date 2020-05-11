import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { RealnameData } from '@/types/views/realname.interface';
import * as RejistrationApi from '@/api/rejistration';

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
    total: 0,
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
    RejistrationApi.getListData(2, 1, 10).then((res: any) => {
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
