// realname.Data 参数类型
export interface RealnameData {
  pageName: string;
  tableData: any[];
  formInline: object;
  drawer: boolean;
  loading: boolean;
  maxHeight: number;
  total: number;
}

// VUEX realname.State 参数类型
export interface RealnameState {
  realname: {
    realnameauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
