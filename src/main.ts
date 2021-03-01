import './public-path';
import './styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Config from './config';
import { Consts } from '@/commons/constants';
// import Page403 from '@/components/notPage/page403';
import { initVueRouter, clearVueRouter } from './router';
import { MainContainerStore } from '@/components/mainContainer';
import { QiankunGlobalState, QiankunProps } from '@/commons/dto/common.dto';
import { GlobalStateActionTypes } from '@/commons/constants/globalStateActionTypes';
import { initAntDesignVue, initVueI18n, clearVueI18n, initDynamicConfig, Logger } from '@/commons/utils';

const instance: { vue: Vue | null } = { vue: null };

function render(props: QiankunProps | null) {
    const { container, rootRouter, rootData, routerBase } = props || {};
    const router = initVueRouter(routerBase || '/');
    const i18n = initVueI18n();
    const dom = container && container.querySelector('#micro-app');

    initDynamicConfig().then(() => {
        instance.vue = new Vue({
            router,
            i18n,
            store,
            render: h => h(App),
            // render: h => h(props ? App : Page403), // 不支持子应用独立运行时会直接拦截 403
        }).$mount(container && dom ? dom : '#micro-app');
    });
    // 没有 rootRouter 的情况会使用 router
    Vue.prototype.$rootRouter = rootRouter || router;
    // 把应用传递过来的数据挂载到 $rootData
    Vue.prototype.$rootData = rootData;
}

Vue.config.productionTip = false;
Vue.prototype.$Consts = Consts; // 全局常量
Vue.prototype.$logger = new Logger(); // 日志打印
Vue.prototype.$message = initAntDesignVue(); // 按需引入 ant-design-vue;
// 应领导要求不支持独立运行独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render(null);
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    // vue?.$logger.log('[vue] vue app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: QiankunProps) {
    // vue?.$logger.log('mount props--->>>')(props);
    const { rootConfig, onGlobalStateChange } = props;
    Vue.prototype.$globalState = props;
    // 下发主应用配置
    if (rootConfig) {
        const { language, theme } = rootConfig;
        // Config.apiBaseUrl = apiBaseUrl; // 设置接口请求地址
        Config.language = language; // 国际化
        Config.theme = theme; // 主题
        // Config.env = env; // 环境
    }
    render(props);
    // 监听全局状态变更
    onGlobalStateChange((state: QiankunGlobalState, prev: QiankunGlobalState) => {
        if (!state) return;
        // state: 变更后的状态; prev: 变更前的状态
        instance.vue?.$logger.log('子应用监听到状态变更--->>>')(state, prev);
        // 切换语言
        if (state.actionType === GlobalStateActionTypes.language) {
            Config.language = state.config.language;
            if (instance.vue) instance.vue.$i18n.locale = Config.language;
        }
        // 切换主题
        if (state.actionType === GlobalStateActionTypes.theme) {
            Config.theme = state.config.theme;
            MainContainerStore.setTheme(Config.theme);
        }
    });
    // 设置全局状态变更
    // setGlobalState({ name: 'micro-app' });
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
// export async function unmount(props: QiankunProps) {
export async function unmount() {
    // instance.vue?.$logger.log('unmount props--->>>')(props);
    if (instance.vue) {
        instance.vue.$destroy();
        instance.vue.$el.innerHTML = '';
    }
    instance.vue = null;
    clearVueRouter();
    clearVueI18n();
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
// export async function update(props: QiankunProps) {
export async function update() {
    // instance.vue?.$logger.log('update props--->>>')(props);
}

export default instance;
