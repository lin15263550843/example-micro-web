import { RouteConfig } from 'vue-router';
/**
 * user 模块路由表
 */
const routes: RouteConfig = {
    path: 'user',
    name: 'user',
    redirect: 'user/login',
    component: { render: h => h('router-view') },
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import(/* webpackChunkName: "user" */ '@/views/user/login'),
            meta: { title: '登录' },
        },
        /* automatically added, please do not modify manually */
    ],
};

export default routes;
