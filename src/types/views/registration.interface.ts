// registration.Data 参数类型
export interface RegistrationData {
  pageName: string;
  tableData: any[];
  formInline: object;
  drawer: boolean;
}

// VUEX rejistration.State 参数类型
export interface RegistrationState {
  registration: {
    registrationauthor: undefined;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
