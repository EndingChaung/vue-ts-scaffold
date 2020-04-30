import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { RealnameData } from '@/types/views/realname.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class Realname extends Vue {
  // Getter
  // @Getter realname.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: RealnameData = {
    pageName: 'realname',
    drawer: false,
    formInline: {
      user: '',
      region: ''
    },
    tableData: [
      {
        date: '2020-05-02',
        name: '杀机四',
        province: '北京',
        city: '朝阳区',
        address: '北京市朝阳区沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2020-05-04',
        name: '杀机四',
        province: '北京',
        city: '朝阳区',
        address: '北京市朝阳区沙江路 1517 弄',
        zip: 200333
      },
      {
        date: '2020-05-01',
        name: '杀机四',
        province: '北京',
        city: '朝阳区',
        address: '北京市朝阳区沙江路 1519 弄',
        zip: 200333
      }
    ]
  };

  created() {
    //
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

  handleClick(index: any, row: any) {
    this.data.drawer = true;
  }

  onSubmit() {
    console.log('submit!', this.data.formInline);
  }
}
