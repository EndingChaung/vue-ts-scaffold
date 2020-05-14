import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const ReportStatistics = (
  StartTime: Date | string,
  EndTime: Date | string
) => {
  let params = {
    StartTime: StartTime,
    EndTime: EndTime
  };
  return Api.ReportStatistics(params, 'GET');
};
