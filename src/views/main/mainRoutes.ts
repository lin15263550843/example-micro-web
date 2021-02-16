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
            redirect: '/main/example/example',
            meta: { title: 'example' },
            component: () => import(/* webpackChunkName: "main" */ '@/views/main/example'),
            children: [{ path: '*', name: 'micro-container' }],
        },
        /* automatically added, please do not modify manually */
    ],
};

export default routes;
