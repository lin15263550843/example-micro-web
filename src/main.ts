import './styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { Consts } from '@/commons/constants';
import { initAntDesignVue, UseI18n, Logger, initDynamicConfig } from '@/commons/utils';
import { initVueRouter } from './router';

const instance: { vue: Vue | null } = { vue: null };

Vue.config.productionTip = false;
Vue.prototype.$Consts = Consts; // 全局常量
Vue.prototype.$logger = new Logger(); // 日志打印
Vue.prototype.$message = initAntDesignVue(); // 按需引入 ant-design-vue;

initDynamicConfig().then(() => {
    const router = initVueRouter();
    const i18n = new UseI18n().initVueI18n();
    instance.vue = new Vue({
        router,
        i18n,
        store,
        render: h => h(App),
    }).$mount('#manage-system-web');
});

// vue = new Vue({
//     router,
//     i18n,
//     store,
//     render: h => h(App),
// }).$mount('#manage-system-web');

export default instance;
