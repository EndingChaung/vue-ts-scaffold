import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchRealNameReportInfo = (AId: string) => {
  let params = {
    AccountId: AId
  };
  return Api.SearchRealNameReportInfo(params, 'GET');
};
