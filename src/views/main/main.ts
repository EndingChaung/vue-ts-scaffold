import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { MainData } from '@/types/views/main.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class Main extends Vue {
  // Getter
  // @Getter main.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: MainData = {
    pageName: 'main'
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
}
