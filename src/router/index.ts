import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './rootRoutes';
import { initRoutingGuard } from './permission';

Vue.use(VueRouter);
/**
 * 创建 VueRouter 实例
 */
function newVueRouter() {
    return new VueRouter({
        // base: '/',  // hash 模式不需要设置 base
        // mode: 'abstract',
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
export function initVueRouter() {
    router = newVueRouter();
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
