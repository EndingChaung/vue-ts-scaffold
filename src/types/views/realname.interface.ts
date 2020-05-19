// realname.Data 参数类型
export interface RealnameData {
  pageName: string;
  tableData: any[];
  rules: object;
  formInline: {
    accountId: string;
  };
  drawer: boolean;
  loading: boolean;
  maxHeight: number;
  total: number;
  currentPage: number;
  byteData?: any;
}

// VUEX realname.State 参数类型
export interface RealnameState {
  realname: {
    realnameauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
