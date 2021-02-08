import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './rootRoutes';

Vue.use(VueRouter);
/**
 * 创建 VueRouter 实例
 */
function newVueRouter() {
    // console.log('process.env.BASE_URL===============', process.env.BASE_URL)
    return new VueRouter({
        // hash 模式不需要设置 base
        base: window.__POWERED_BY_QIANKUN__ ? '/main/home/example/' : '/',
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
    // 跳转之前
    router.beforeEach((to, from, next) => {
        // console.log('to===>>>:, from===>>>:')
        // console.log(from)
        // console.log(to)
        // 页面标签标题
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        // 后台使用token来校验登录状态，校验token是否存在,即是否登录
        const token = localStorage.getItem('token');
        if (token) {
            // 已登录，则跳到对应页面
            next();
        } else {
            next();
            // if (!to.name || PUBLIC_ROUTES.includes(to.name)) {
            //     // 首页或者开放页面直接放行
            //     next()
            // } else {
            //     // 未登录页面,跳转登录页
            //     next('/login')
            // }
        }
    });
    // 跳转之后
    router.afterEach(() => {
        // console.log('to===>>>:, from===>>>:')
        // 目前不做处理，仅作预留
    });
    return router;
}
/**
 * 清除 VueRouter
 */
export function clearVueRouter() {
    router = null;
}
// const router = new VueRouter({
//     // hash 模式不需要设置 base
//     base: window.__POWERED_BY_QIANKUN__ ? '/framework/' : '/',
//     mode: 'history',
//     routes
// })

export default router;
