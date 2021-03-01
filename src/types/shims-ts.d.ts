import Vue, { VNode } from 'vue';
import { Consts } from '@/commons/constants';
import VueRouter, { Route } from 'vue-router';
import { MicroAppStateActions } from 'qiankun';
import Transmission from '@/commons/qiankun/transmission';
import { Logger } from '@/commons/utils';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
    interface Window {
        __DYNAMIC_CONFIG__: any;
    }
}

// 1. 确保在声明补充的类型之前导入 'vue'
// import Vue from 'vue'
// 2. 定制一个文件，设置你想要补充的类型
// 在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
    // 3. 声明为 Vue 补充的东西
    interface Vue {
        $Consts: typeof Consts;
        $rootFontSize: number;
        $router: VueRouter;
        $logger: Logger;
        $route: Route;
        $transmission: Transmission;
        $microAppStateActions: MicroAppStateActions;
    }
}
