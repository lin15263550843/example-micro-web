import Vue, { VNode } from 'vue';
import { Consts } from '@/commons/constants';
import VueRouter, { Route } from 'vue-router';

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
}
declare module 'vue/types/vue' {
    interface Vue {
        $myProperty: string;
        $router: VueRouter;
        $route: Route;
        $rootRouter: VueRouter;
        $rootFontSize: number;
        $Consts: typeof Consts;
        $globalState: any;
    }
}
