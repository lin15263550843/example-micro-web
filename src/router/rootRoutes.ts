import userRoutes from '@/views/user/userRoutes';
import mainRoutes from '@/views/main/mainRoutes';
import MainContainer from '@/components/mainContainer';
import { RouteConfig } from 'vue-router';
/**
 * 根路由表
 */
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'mainContainer',
        redirect: '/m',
        component: MainContainer,
        children: [
            userRoutes,
            mainRoutes,
            /* automatically added, please do not modify manually */
        ],
    },
    {
        path: '/403',
        component: () => import(/* webpackChunkName: "components" */ '@/components/notPage/page403'),
        meta: { title: '403' },
    },
    {
        path: '*', // 这里匹配404链接 需要放在路由的最后一个位置
        // redirect: '/m',
        component: () => import(/* webpackChunkName: "components" */ '@/components/notPage/page404'),
        meta: { icon: '', keepAlive: true, title: '找不到页面' },
    },
];

export default routes;
