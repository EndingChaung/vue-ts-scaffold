// error.Data 参数类型
export interface LogErrorData {
  pageName: string;
  tableData: any[];
  fileTypes: string[];
  pushTypes: string[];
  formInline: {
    timeRange: Date[];
  };
  pickerOptions: object;
  rules: object;
  drawer: boolean;
  loading: boolean;
  total: number;
  maxHeight: number;
  currentPage: number;
  byteData?: any;
}

// VUEX error.State 参数类型
export interface LogErrorState {
  error: {
    errorauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
