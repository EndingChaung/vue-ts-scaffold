// sign.Data 参数类型
export interface SignData {
  pageName: string;
  tableData: any[];
  formInline: object;
  drawer: boolean;
}

// VUEX sign.State 参数类型
export interface SignState {
  sign: {
    signauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
