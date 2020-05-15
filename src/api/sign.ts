import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchSignReport = (AId: string, CNo: string) => {
  let params = {
    AccountId: AId,
    ContractNo: CNo
  };
  return Api.SearchSignReport(params, 'GET');
};
