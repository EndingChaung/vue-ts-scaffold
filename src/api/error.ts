import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
};
export const SearchLogList = (
  STime: Date | string,
  ETime: Date | string,
  PIndex: number,
  PCount: number
) => {
  let params = {
    StartTime: STime,
    EndTime: ETime,
    PageIndex: PIndex,
    PageCount: PCount
  };
  return Api.SearchLogList(params, 'GET');
};

export const DownloadLog = (id: number) => {
  let params = {
    Id: id
  };
  return Api.DownloadLog(params, 'GET');
};
