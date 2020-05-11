import Api from '@/utils/request';

export const getListData = (
  ReportType: number,
  PageIndex: number,
  PageCount: number
) => {
  let params = {
    ReportType: ReportType,
    PageIndex: PageIndex,
    PageCount: PageCount
  };
  return Api.getListData(params, 'GET');
};
export const downReport = (ReportId: number) => {
  let params = {
    Id: ReportId
  };
  return Api.downReport(params, 'GET');
};
