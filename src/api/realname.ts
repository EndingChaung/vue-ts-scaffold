import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchRealNameReportInfo = (AccountId: string) => {
  let params = {
    AccountId: AccountId
  };
  return Api.SearchRealNameReportInfo(params, 'GET');
};
