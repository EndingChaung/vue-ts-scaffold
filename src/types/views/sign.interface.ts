// sign.Data 参数类型
export interface SignData {
  pageName: string;
  tableData: any[];
  rules: object;
  formInline: {
    accountId: string;
    countractId: string;
  };
  drawer: boolean;
  loading: boolean;
  maxHeight: number;
  total: number;
  currentPage: number;
  pageType: number;
  byteData?: any;
}

// VUEX sign.State 参数类型
export interface SignState {
  sign: {
    signauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
