import Vue, { VNode } from 'vue';
import { Consts } from '@/commons/constants';
import VueRouter, { Route } from 'vue-router';
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
        __POWERED_BY_QIANKUN__: boolean;
        __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
        __DYNAMIC_CONFIG__: any;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $Consts: typeof Consts;
        $rootFontSize: number;
        $router: VueRouter;
        $logger: Logger;
        $route: Route;
        $globalState: any;
        $rootData: any;
        $rootRouter: VueRouter;
    }
}
