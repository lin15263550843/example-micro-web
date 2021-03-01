import loginConst from '@/views/user/login/login.const';
import { LocalStorage } from '@/commons/utils/localStorage';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { RouterPaths } from '@/commons/constants/routerPaths';

Vue.use(VueRouter);
/**
 * 初始化路由守卫
 */
export function initRoutingGuard(router: VueRouter) {
    // 跳转之前
    router.beforeEach((to, from, next) => {
        // 页面标签标题
        // if (to.meta.title) {
        //     document.title = to.meta.title;
        // }
        // 后台使用token来校验登录状态，校验token是否存在,即是否登录
        // const token = localStorage.getItem('token');
        // 先暂时使用 userInfo 代替
        const userInfo = LocalStorage.get(loginConst.localStorageKeys.userInfo);
        if (userInfo) {
            // 已登录，则跳到对应页面
            next();
        } else {
            // 开放页面直接放行的逻辑如果以后业务有需求再添加
            if (RouterPaths.login === to.path) {
                next();
            } else {
                // 未登录的拦截到登录
                next(RouterPaths.login);
            }
        }
    });
    // 跳转之后
    router.afterEach(() => {
        // 目前不做处理，仅作预留
    });
}
