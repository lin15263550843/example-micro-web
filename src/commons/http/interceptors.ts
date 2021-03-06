import { LocalStorage } from './../utils/localStorage';
/**
 * 封装 axios 拦截
 */
import Axios from 'axios';
import vm from '@/main';
// import Config from '@/config';
import { RouterPaths } from '../constants/routerPaths';
/**
 * 防止重复提交，利用axios的cancelToken
 */
// const pending: any[] = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// const CancelToken: any = Axios.CancelToken

// const removePending: any = (config: any, f: any) => {
//     // 获取请求的url
//     const flagUrl = config.url
//     // 判断该请求是否在请求队列中
//     if (pending.indexOf(flagUrl) !== -1) {
//         // 如果在请求中，并存在f,f即axios提供的取消函数
//         if (f) {
//             f('取消重复请求') // 执行取消操作
//         } else {
//             pending.splice(pending.indexOf(flagUrl), 1) // 把这条记录从数组中移除
//         }
//     } else {
//         // 如果不存在在请求队列中，加入队列
//         if (f) {
//             pending.push(flagUrl)
//         }
//     }
// }

/**
 * 创建axios实例
 */
const service = Axios.create({
    // baseURL: Config.apiBaseUrl, // 基础地址 要请求的url前缀
    timeout: 60000, // 请求超时时间
});
/**
 * 添加请求拦截器
 */
service.interceptors.request.use(
    config => {
        // neverCancel 配置项，允许多个请求
        // if (!config.neverCancel) {
        //     // 生成cancelToken
        //     config.cancelToken = new CancelToken((c: any) => {
        //         removePending(config, c)
        //     })
        // }
        // 在发送请求之前先执行一些操作
        // const token = localStorage.getItem('token')
        // config.headers['Authorization'] = `Bearer ${token}`
        if ('post' === config.method) {
            config.data = {
                // userID: localStorage.getItem('userID'),
                ...config.data,
            };
        }
        // 在这里可以统一修改请求头，例如 加入 用户 token 等操作
        //   if (store.getters.sessionId) {
        //     config.headers['X-SessionId'] = getSessionId(); // 让每个请求携带token--['X-Token']为自定义key
        //   }
        return config;
    },
    error => {
        // 对请求错误做些什么
        // vm.vue?.$logger.log('requestError ===>>>')(error);
        return Promise.reject(error);
    },
);
/**
 * 添加响应拦截器
 */
service.interceptors.response.use(
    response => {
        // 移除队列中的该请求，注意这时候没有传第二个参数f
        // removePending(response.config)
        // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
        // if (response.status !== 200) {
        //     alert(1)
        //     if (response.status === 401) {
        //         if (location.hash === '#/') {
        //             return response
        //         } else {
        //             location.href = '/#/'
        //         }
        //     }
        //     return Promise.reject('error')
        // } else {
        //     return response
        // }
        const resData = response?.data;

        // 考虑到接口返回不应为空，所以全局处理，抛出未知错误
        if (!resData) {
            return { code: -200, data: null, message: '未知错误' };
        }
        // 成功后自定义的状态拦截
        switch (resData?.code) {
            case 203:
                break;
            case 500:
                break;
            case 404:
                break;
            default:
                break;
        }
        return resData;
    },
    error => {
        const errRes = error?.response;
        if (!errRes) {
            vm.vue?.$message.error(error?.message);
            // vm.vue?.$router.push(RouterPaths.login);
            return Promise.reject(error);
        }
        // 对响应错误做点什么
        // Prompt.toast(error.message)
        switch (errRes?.status) {
            // 各种错误处理
            case 401:
                LocalStorage.clear();
                vm.vue?.$router.push(RouterPaths.page403);
                return Promise.resolve(errRes?.data);
            case 403:
                // 用户身份失效，跳转登录
                LocalStorage.clear();
                vm.vue?.$message.error(errRes?.data?.message);
                vm.vue?.$router.push(RouterPaths.page403);
                return Promise.resolve(errRes?.data);
            case 404:
                return Promise.resolve(errRes?.data);
            case 500:
                // 服务器错误
                break;
            case 502:
                break;
            case 503:
                // 网络异常
                break;
            default:
                break;
        }
        // pending = []
        // if (error.message === '取消重复请求') {
        //     return Promise.reject(error)
        // }

        return Promise.reject(errRes);
    },
);
export default service;
