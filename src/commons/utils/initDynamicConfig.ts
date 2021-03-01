import Config from '@/config';
// import Http from '@/commons/http';
/**
 * 获取动态配置文件，dynamicConfig.json 文件可以在服端实时动态修改
 */
export function initDynamicConfig() {
    // fetch 的速度可能比 xhr 更快一丢丢，如果浏览器不支持 fetch 可以使用下面的 Http.request (xhr) 方法
    return fetch(`${window.location.origin}/dynamicConfig.json`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            const { apiBaseUrl, apiPrefix, language, env, logger, theme } = json;
            if (json) {
                // 动态配置
                Config.apiBaseUrl = `${apiBaseUrl}/${apiPrefix}${apiPrefix && '/'}`;
                Config.language = language;
                Config.theme = theme;
                Config.logger = logger;
                Config.env = env;
            }
        })
        .catch(err => {
            console.error(err);
        });
    // return Http.request({ url: '/dynamicConfig.json' })
    //     .then(json => {
    //         const { apiBaseUrl, apiPrefix, language, env, logger, theme } = (json as any) || {};
    //         if (json instanceof Object) {
    //             // 动态配置
    //             Config.apiBaseUrl = `${apiBaseUrl}/${apiPrefix}/`;
    //             Config.language = language;
    //             Config.theme = theme;
    //             Config.logger = logger;
    //             Config.env = env;
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    //
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', '/dynamicConfig.json', true);
    // xhr.responseType = 'json';
    // xhr.send(null);
    // xhr.onload = () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         const json = xhr.response;
    //         const { apiBaseUrl, apiPrefix, language, env, logger, theme } = (json as any) || {};
    //         if (json) {
    //             // 动态配置
    //             Config.apiBaseUrl = `${apiBaseUrl}/${apiPrefix}/`;
    //             Config.language = language;
    //             Config.theme = theme;
    //             Config.logger = logger;
    //             Config.env = env;
    //         }
    //         callback();
    //     }
    // };
}
