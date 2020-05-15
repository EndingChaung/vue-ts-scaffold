/**
 * 线上环境
 */
export const ONLINEHOST: string = '';

/**
 * 测试环境
 */
export const QAHOST: string = 'http://192.168.70.57:8081';

/**
 * 线上mock
 */
export const MOCKHOST: string = 'https://www.easy-mock.com';

/**
 * 是否mock
 */
export const ISMOCK: boolean = false;

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST;

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {};

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1;
