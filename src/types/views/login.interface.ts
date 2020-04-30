// login.Data 参数类型
export interface LoginData {
  pageName: string;
  form: {
    name: string;
    pass: string;
  };
}

// VUEX login.State 参数类型
export interface LoginState {
  // data?: any;
  login: {
    author: any;
  };
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
