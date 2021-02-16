import './styles/index.scss';

import Vue from 'vue';
import {
    registerMicroApps,
    start,
    // prefetchApps,
    addGlobalUncaughtErrorHandler,
    initGlobalState,
    MicroAppStateActions,
} from 'qiankun';

import App from './App.vue';
import store from './store';
import Config from './config';
import { Consts } from '@/commons/constants';
import { initVueRouter } from './router';
import { initAntDesignVue, initVueI18n } from './commons/utils';

initAntDesignVue(); // 按需引入 ant-design-vue

const router = initVueRouter();

Vue.config.productionTip = false;
Vue.prototype.$Consts = Consts; // 全局常量
Vue.prototype.$rootRouter = router;

// const rootState = { rootConfig: Config }; // 全局状态
const rootInfo = { rootRouter: router, rootConfig: Config }; // 传递给字应用的配置信息
const i18n = initVueI18n();
const instance = new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#main-app-web');

/**
 * 定义全局状态，并返回通信方法，建议在主应用使用，
 * 微应用通过 props 获取通信方法
 * 初始化 state
 */
const actions: MicroAppStateActions = initGlobalState(Config);
Vue.prototype.$microAppStateActions = actions;
// 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('主应用监听到状态变更------>>>', state, prev);
});
// 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
// actions.setGlobalState(rootState);
// 移除当前应用的状态监听，微应用 umount 时会默认调用
// actions.offGlobalStateChange()
/**
 * apps - Array<RegistrableApp> - 必选，微应用的一些注册信息
 * lifeCycles - LifeCycles - 可选，全局的微应用生命周期钩子
 */
registerMicroApps(
    [
        {
            name: 'example-micro-web',
            entry: '//localhost:8081',
            container: '#micro-application-container-example-micro-web',
            activeRule: '/main/example/example',
            props: { ...rootInfo, data: '传递给子应用的数据' },
        },
    ],
    {
        beforeLoad: app => Promise.resolve(console.log('beforeLoad=====', app)),
        beforeMount: [async app => console.log('beforeMount============', app)],
        afterMount: [async app => console.log('afterMount==============', app)],
        beforeUnmount: [async app => console.log('beforeUnmount========', app)],
        afterUnmount: [async app => console.log('afterUnmount==========', app)],
    },
);
/**
 * 启动
 * opts - Options 可选（具体参数请查阅官方文档）
 * https://qiankun.umijs.org/zh/api#startopts
 */
start();
/**
 * apps - AppMetadata[] - 必选 - 预加载的应用列表
 * importEntryOpts - 可选 - 加载配置
 */
// prefetchApps([{ name: 'yjwz-web', entry: 'http://localhost:3000/#/' }]);
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(event => {
    console.log('event------>>>', event);
});

export default instance;
