import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './rootRoutes';
import { initRoutingGuard } from './permission';

Vue.use(VueRouter);
/**
 * 创建 VueRouter 实例
 */
function newVueRouter(basePath: string) {
    return new VueRouter({
        //         // hash 模式不需要设置 base
        base: window.__POWERED_BY_QIANKUN__ ? basePath : '/',
        mode: 'history',
        routes,
    });
}
/**
 * 路由实例对象
 */
// let router = newVueRouter()
let router: VueRouter | null = null;
/**
 * 初始化 VueRouter
 */
export function initVueRouter(basePath: string) {
    router = newVueRouter(basePath);
    initRoutingGuard(router);
    return router;
}
/**
 * 清除 VueRouter
 */
export function clearVueRouter() {
    router = null;
}

// export default { router };
