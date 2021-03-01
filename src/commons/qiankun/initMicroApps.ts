import vm from '@/main';
import { Consts } from '@/commons/constants';
import Vue from 'vue';
import Config from '@/config';
import VueRouter from 'vue-router';
import {
    registerMicroApps,
    start,
    // prefetchApps,
    addGlobalUncaughtErrorHandler,
    initGlobalState,
    MicroAppStateActions,
} from 'qiankun';
import { QiankunGlobalState, RegistrableApp } from '@/commons/dto/index.dto';
import Transmission from './transmission';
import { GlobalLoadingModule } from '@/components/globalLoading';
import { GlobalStateActionTypes } from '../constants/globalStateActionTypes';

/**
 * 定义全局状态
 */
const globalState: QiankunGlobalState = {
    actionType: GlobalStateActionTypes.config, //  传递信息的类型，根据动作类型控制具体操作
    config: Config,
    // 应用切换传递信息规范
    route: {
        sender: '', // 发送者
        recipient: '', // 接收着
        type: '', // 类型标识
        appName: '', // 要跳转的应用名称
        menuCode: '', // 要跳转的应用对应菜单名称
        path: '', // 要跳转的应用页面路径
        params: {}, // 传递的数据
    },
};
const transmission = new Transmission();
/**
 * 组装 qiankun 需要的子应用列表
 */
export function handleMicroApps(rootRouter: VueRouter, microApps: RegistrableApp[]) {
    Vue.prototype.$transmission = transmission;
    return microApps.map(item => {
        return {
            name: item.name,
            entry: item.entry,
            container: Consts.container,
            activeRule: item.activeRule,
            props: { rootRouter, rootConfig: Config, routerBase: item.activeRule, rootData: { params: null } }, // 传递给字应用的信息
        };
    });
}
/**
 * 初始化子应用
 * @param {VueRouter} rootRouter 路由
 */
export function initMicroApps(rootRouter: VueRouter, microApps: RegistrableApp[]) {
    /**
     * apps - Array<RegistrableApp> - 必选，微应用的一些注册信息
     * lifeCycles - LifeCycles - 可选，全局的微应用生命周期钩子
     */
    registerMicroApps(handleMicroApps(rootRouter, microApps), {
        // beforeLoad: app => Promise.resolve(vm.vue?.$logger.log('beforeLoad======>>>', app)),
        beforeMount: [
            async app => {
                const { props } = app;
                // 子应用间传递的参数
                if (props) props.rootData.params = transmission.getParams();
                // vm.vue?.$logger.log('beforeMount======>>>', app);
            },
        ],
        afterMount: async () => {
            // vm.vue?.$logger.log('afterMount===>>>')(app);
            GlobalLoadingModule.updateLoading(false);
        },
        // beforeUnmount: [async app => vm.vue?.$logger.log('beforeUnmount========>>>', app)],
        // afterUnmount: [async app => vm.vue?.$logger.log('afterUnmount==========>>>', app)],
    });
    /**
     * 启动
     * opts - Options 可选（具体参数请查阅官方文档）
     * https://qiankun.umijs.org/zh/api#startopts
     */
    start();
    /**
     * 定义全局状态，并返回通信方法，建议在主应用使用，
     * 微应用通过 props 获取通信方法
     * 初始化 state
     */
    const actions: MicroAppStateActions = initGlobalState(globalState);
    Vue.prototype.$microAppStateActions = actions;
    // 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
    // actions.onGlobalStateChange((state, prev) => {
    //     // state: 变更后的状态; prev 变更前的状态
    //     vm.vue?.$logger.log('initMicroApps 中主应用监听到状态变更------>>>', state, prev);
    // });
    // 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
    // actions.setGlobalState(rootState);
    // 移除当前应用的状态监听，微应用 umount 时会默认调用
    // actions.offGlobalStateChange()
    /**
     * apps - AppMetadata[] - 必选 - 预加载的应用列表
     * importEntryOpts - 可选 - 加载配置
     */
    // prefetchApps([{ name: 'yjwz-web', entry: 'http://localhost:3000/#/' }]);
    /**
     * 添加全局的未捕获异常处理器
     */
    addGlobalUncaughtErrorHandler(event => {
        // vm.vue?.$logger.log('event------>>>')(event);
        // 警告：此处应该根据业务需求做不同处理，先都转到 404 ！！！
        if ('error' === (event as Event).type) {
            vm.vue?.$router.push('/404');
        }
    });
    setTimeout(() => {
        // 因为实际开发时因为热重载时 qiankun 不会重新注册子应用，会一直显示 loading
        // 所以防止 loadin 一直不取消，2.5s 后自动关闭
        GlobalLoadingModule.updateLoading(false);
    }, 2500);
}
