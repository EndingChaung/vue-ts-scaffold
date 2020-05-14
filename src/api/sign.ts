import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchSignReport = (AccountId: string, ContractNo: string) => {
  let params = {
    AccountId: AccountId,
    ContractNo: ContractNo
  };
  return Api.SearchSignReport(params, 'GET');
};
