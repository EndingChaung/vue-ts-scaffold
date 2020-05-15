import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const ReportStatistics = (
  STime: Date | string,
  ETime: Date | string
) => {
  let params = {
    StartTime: STime,
    EndTime: ETime
  };
  return Api.ReportStatistics(params, 'GET');
};
