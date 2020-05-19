import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchSignReport = (
  AId: string,
  CNo: string,
  page: number,
  pageC: number
) => {
  let params = {
    AccountId: AId,
    ContractNo: CNo,
    PageIndex: page,
    PageCount: pageC
  };
  return Api.SearchSignReport(params, 'GET');
};
