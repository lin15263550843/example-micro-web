import { RouteConfig } from 'vue-router';
/**
 * user 模块路由表
 */
const routes: RouteConfig = {
    path: '/main',
    name: 'main',
    redirect: '/main/home',
    component: { render: h => h('router-view') },
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/main/home'),
            meta: { title: '首页', icon: '', isSide: true, isFooter: true, isHeader: false },
        },
    ],
};

export default routes;
