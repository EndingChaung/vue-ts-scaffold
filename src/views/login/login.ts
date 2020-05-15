import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { LoginData } from '@/types/views/login.interface';
import { setToken } from '@/utils/common';

@Component({
  components: {}
})
export default class Login extends Vue {
  // Getter
  // @Getter login.author

  // Action
  @Action UPDATE_STATE_ASYN: (arg0: {
    main: {
      mainauthor: undefined;
      navActive: string;
    };
  }) => void;

  // data
  data: LoginData = {
    pageName: 'login',
    form: {
      name: '',
      pass: ''
    }
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

  doSubmit() {
    const data = this.data.form;
    if (data.name === 'admin' && data.pass === '1qazxsw2') {
      setToken('123456');
      const main_state = {
        main: {
          mainauthor: undefined,
          navActive: '/main'
        }
      };
      this.UPDATE_STATE_ASYN(main_state);
      const router: any = this.$router;
      router.push('/main');
    } else {
      this.$message.error({
        message: '登录错误，请输入正确的登录信息'
      });
    }
  }
}
