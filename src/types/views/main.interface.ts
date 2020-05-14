// main.Data 参数类型
export interface MainData {
  pageName: string;
  formInline: {
    timeRange: Date[];
  };
  pickerOptions: object;
  rules: object;
  T_ErrorlogNumber: number;
  IssueReportNumber: number;
  IssueLogNumber: number;
  CosReportNumber: number;
  CosLogNumber: number;
}

// VUEX main.State 参数类型
export interface MainState {
  main: {
    mainauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
