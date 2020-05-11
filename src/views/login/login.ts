import { Component, Vue } from 'vue-property-decorator';
// import { Getter, Action } from 'vuex-class';
import { LoginData } from '@/types/views/login.interface';
import { setToken } from '@/utils/common';

@Component({
  components: {}
})
export default class Login extends Vue {
  // Getter
  // @Getter login.author

  // Action
  // @Action GET_DATA_ASYN

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
      const router: any = this.$router;
      router.push('/main');
    } else {
      this.$message.error({
        message: '登录错误，请输入正确的登录信息'
      });
    }
  }
}
