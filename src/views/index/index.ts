import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { IndexData } from '@/types/views/index.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class Index extends Vue {
  // Action
  // Getter
  // @Getter index.author
  // Action
  // @Action
  // GET_DATA_ASYN!: () => void;

  // data
  data: IndexData = {
    pageName: 'index',
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
