import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
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
    formInline: {
      user: '',
      region: ''
    },
    total: 0,
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
    RejistrationApi.getListData(1, 1, 10).then((res: any) => {
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
    RejistrationApi.downReport(row.Id).then((res: any) => {
      const base64 = res.downReportModel.FileByte;
      this.base64ToBlob(base64, 'application/pdf').then(result => {
        var url = URL.createObjectURL(result);
        this.data.byteData = url;
      });
    });
  }

  isBase64(str: string) {
    // eslint-disable-next-line no-useless-escape
    const notBase64 = /[^A-Z0-9+\/=]/i;
    const len = str.length;
    if (!len || len % 4 !== 0 || notBase64.test(str)) {
      return false;
    }
    const firstPaddingChar = str.indexOf('=');
    return (
      firstPaddingChar === -1 ||
      firstPaddingChar === len - 1 ||
      (firstPaddingChar === len - 2 && str[len - 1] === '=')
    );
  }

  base64ToBlob(b64data = '', contentType = '', sliceSize = 512) {
    return new Promise((resolve, reject) => {
      // 使用 atob() 方法将数据解码
      let byteCharacters = atob(b64data);
      let byteArrays = [];
      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = [];
        for (let i = 0; i < slice.length; i++) {
          byteNumbers.push(slice.charCodeAt(i));
        }
        // 8 位无符号整数值的类型化数组。内容将初始化为 0。
        // 如果无法分配请求数目的字节，则将引发异常。
        byteArrays.push(new Uint8Array(byteNumbers));
      }
      let result = new Blob(byteArrays, {
        type: contentType
      });
      result = Object.assign(result, {
        // jartto: 这里一定要处理一下 URL.createObjectURL
        preview: URL.createObjectURL(result)
      });
      resolve(result);
    });
  }

  // 提交表单筛选条件
  onSubmit() {
    console.log('submit!', this.data.formInline);
  }
}
