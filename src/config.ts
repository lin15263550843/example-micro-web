import { Language, Themes } from '@/commons/constants';
/**
 * 配置文件
 */
/**
 *
 * ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 * ★                                                           ★
 * ★       请不要随便修改这里的配置.如有添加找我确认               ★
 * ★       开发过程中 Ent.ts 配置项可以随便修改,但是不要提交       ★
 * ★       如果不听，出了问题后果自负哟...................        ★
 * ★                                                           ★
 * ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 *
 *
 * */
export default class Config {
    // 接口调用基础URL
    // static readonly apiBaseUrl: string = 'http://10.182.52.107:8080/hmzy/'
    // static apiBaseUrl: string = `${process.env.VUE_APP_APIBASEURL}/${process.env.VUE_APP_APIPREFIX}/`
    // static apiBaseUrl: string = `http://yjwztest.qingdao.cosmoplat.com/yjwztest/`
    static apiBaseUrl = 'http://10.138.41.66:30133/hmzy/';
    // 图片前缀 URL
    static imgPrefixUrl = 'https://www.baidu.com/';
    // 国际化
    static language = Language.zhCN;
    static theme = Themes.YJWZ_PRIMARY;
}

// // 开发环境请求基础地址
// let BASE_HOST: string = location.origin
// if (process.env.NODE_ENV === 'pro' || process.env.NODE_ENV === 'pre' || process.env.NODE_ENV === 'dev') {
//     BASE_HOST = process.env.VUE_APP_BASEURL
// }

// // export BASE_HOST

// interface Prefix {
//     // USER: string
//     DEFAULT: string
// }
// const mode: string = process.env.VUE_APP_MODE ? process.env.VUE_APP_MODE : ''
// export const PREFIX: Prefix = {
//     // 默认无接口前缀
//     DEFAULT: ''
//     // 多工程多接口前缀在这里配置
//     // USER: '/ylh-cloud-service-user' + mode,
// }

// console.log('process.env=================================',process.env);
