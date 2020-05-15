import Api from '@/utils/request';

export const getListData = (RType: number, PIndex: number, PCount: number) => {
  let params = {
    ReportType: RType,
    PageIndex: PIndex,
    PageCount: PCount
  };
  return Api.getListData(params, 'GET');
};
export const SearchRegisterReportInfo = (AId: string) => {
  let params = {
    AccountId: AId
  };
  return Api.SearchRegisterReportInfo(params, 'GET');
};
export const downReport = (RId: number) => {
  let params = {
    Id: RId
  };
  return Api.downReport(params, 'GET');
};
