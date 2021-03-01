import { RouteConfig } from 'vue-router';
/**
 * Created by lhd on 2021-02-28 22:46:33
 * demo 模块路由表
 */
const routes: RouteConfig = {
    path: 'demo',
    name: 'demo',
    component: { render: h => h('router-view') },
    children: [
        {
            path: 'page2',
            name: 'page2',
            component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/page2'),
            meta: { title: 'page2' },
        },
        /* automatically added, please do not modify manually */
    ],
};

export default routes;
