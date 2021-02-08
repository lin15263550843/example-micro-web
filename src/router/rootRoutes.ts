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
        name: 'main',
        redirect: '/main',
        component: MainContainer,
        meta: { title: '', icon: '', affix: true },
        children: [
            userRoutes,
            mainRoutes,
            /* automatically added, please do not modify manually */
        ],
    },
    /* 会在此处生成相应的路由配置，无需手动添加，如果和权限相关，只需要在 meta 中天添加相关权限配置 */
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {
        path: '*', // 这里匹配404链接 需要放在路由的最后一个位置
        // redirect: '/home',
        component: () => import('@/components/notPage/404/404.vue'),
        meta: { icon: '', keepAlive: true, title: '找不到页面' },
    },
];

export default routes;
