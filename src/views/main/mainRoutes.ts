import { RouteConfig } from 'vue-router';
/**
 * user 模块路由表
 */
const routes: RouteConfig = {
    path: '/m',
    name: 'm',
    // redirect: '/m/example',
    component: () => import(/* webpackChunkName: "main" */ '@/views/main/home'),
    children: [{ path: '*', name: 'micro-container' }],
    // children: [
    //     /**
    //      * 需要动态生成的路由表
    //      */
    //     {
    //         path: 'example',
    //         name: 'example',
    //         meta: { title: '子应用' },
    //         component: () => import(/* webpackChunkName: "home" */ '@/views/main/home'),
    //         children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    //     {
    //         path: 'example2',
    //         name: 'example2',
    //         meta: { title: '子应用' },
    //         component: () => import(/* webpackChunkName: "home" */ '@/views/main/home'),
    //         children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    //     {
    //         path: 'notpage',
    //         name: 'notpage',
    //         meta: { title: 'notpage' },
    //         // children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    //     {
    //         path: 'notpage434343',
    //         name: 'notpage434343',
    //         meta: { title: 'notpage' },
    //         // children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    // ],
    // component: { render: h => h('router-view') },
    // children: [
    //     {
    //         path: 'container',
    //         name: 'container',
    //         meta: { title: '首页' },
    //         // redirect: '/main/container',
    //         // component: { render: h => h('router-view') },
    //         component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //         children: [{ path: '*', name: 'micro-container' }],
    //     },
    //     {
    //         path: 'home',
    //         name: 'home',
    //         meta: { title: '首页' },
    //         redirect: '/main/home/example',
    //         component: () => import(/* webpackChunkName: "home" */ '@/views/main/home'),
    //         children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    //     {
    //         path: 'home',
    //         name: 'home',
    //         meta: { title: '首页' },
    //         redirect: '/main/home/example2',
    //         component: () => import(/* webpackChunkName: "home" */ '@/views/main/home'),
    //         children: [{ path: '*', name: 'micro-container' }],
    //         // component: { render: h => h('div', { class: 'micro-application-container-example-micro-web' }) },
    //     },
    // ],
};

export default routes;
