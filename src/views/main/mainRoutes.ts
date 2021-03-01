import { RouteConfig } from 'vue-router';
/**
 * user 模块路由表
 */
const routes: RouteConfig = {
    path: '/main',
    name: 'main',
    redirect: '/main/example',
    component: { render: h => h('router-view') },
    children: [
        {
            path: 'example',
            name: 'example',
            component: () => import(/* webpackChunkName: "main" */ '@/views/main/example'),
            meta: { title: 'example' },
        },
        {
            path: 'page1',
            name: 'page1',
            component: () => import(/* webpackChunkName: "main" */ '@/views/main/page1'),
            meta: { title: 'page1' },
        },
        /* automatically added, please do not modify manually */
    ],
};

export default routes;
