import { Env, Language, Themes } from '@/commons/constants';
/**
 * 配置文件
 * window.__DYNAMIC_CONFIG__ 是动态配置的文件信息，如果获取文件失败，则使用默认配置
 * 目前使用方式二
 */
export default class Config {
    /**
     * 接口调用基础URL
     */
    static apiBaseUrl = `${process.env.VUE_APP_APIBASEURL}/${process.env.VUE_APP_APIPREFIX}/`;
    /**
     * 图片前缀 URL
     */
    static imgPrefixUrl = 'https://www.img.com/';
    /**
     * 国际化
     */
    static language = Language.zhCN;
    /**
     * 主题
     */
    static theme = Themes.PRIMARY;
    /**
     * 环境标识
     */
    static env: Env = Env.local;
    /**
     * 简单的日志相关配置
     */
    static logger = {
        /**
         * 开启日志
         */
        enable: false,
        /**
         * 上传日志
         */
        isUploadLog: false,
    };
}
/**
 * 方案一
 */

// dynamicConfig.json 中配置：
// window.__DYNAMIC_CONFIG__ = {
//     "apiBaseUrl": "http://yjwzdev.qingdao.cosmoplat.com",
//     "apiPrefix ": "hmzy",
//     "language": "zhCN",
//     "env": "local",
// }

// html中配置
// <link href=/dynamicConfig.json rel=prefetch>
// <script type="text/javascript" src="/dynamicConfig.json"></script>

// config.ts 中配置
// const { apiBaseUrl, apiPrefix, language, env, logger } = window.__DYNAMIC_CONFIG__ || {};
// static language = language || Language.zhCN;

/**
 * 方案二
 */

// dynamicConfig.json 中配置：
// {
//     "apiBaseUrl": "http://yjwzdev.qingdao.cosmoplat.com",
//     "apiPrefix": "hmzy",
//     "language": "zhCN",
//     "env": "local",
//     "logger": {
//         "loggerEnable": false,
//         "isUploadLog": false
//     }
// }

// main.ts 中配置
// import Config from '@/config';

// let instance: Vue | null = null;

// fetch('/dynamicConfig.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (json) {
//         const { apiBaseUrl, apiPrefix, language, env, logger } = json;
//         if (json) {
//             // 动态配置
//             Config.apiBaseUrl = `${apiBaseUrl}/${apiPrefix}/`;
//             Config.language = language;
//             Config.logger = logger;
//             Config.env = env;
//         }

//         instance = new Vue({
//             router,
//             i18n,
//             store,
//             render: h => h(App),
//         }).$mount('#manage-system-web');
//     });

// export default instance;
