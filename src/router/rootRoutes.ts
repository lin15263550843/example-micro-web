import demoRoutes from '@/views/demo/demoRoutes';
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
        redirect: '/main',
        component: MainContainer,
        meta: { title: '', icon: '' },
        children: [
            mainRoutes,
            demoRoutes,
            /* automatically added, please do not modify manually */
        ],
        /* 会在此处生成相应的路由配置，无需手动添加，如果和权限相关，只需要在 meta 中天添加相关权限配置 */
    },
    {
        path: '/403',
        component: () => import(/* webpackChunkName: "components" */ '@/components/notPage/page403'),
        meta: { title: '403' },
    },
    {
        path: '*', // 这里匹配404链接 需要放在路由的最后一个位置
        // redirect: '/home',
        component: () => import(/* webpackChunkName: "components" */ '@/components/notPage/page404'),
        meta: { title: '404' },
    },
];

export default routes;
