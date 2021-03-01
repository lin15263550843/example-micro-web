import VueRouter from 'vue-router';
import Config from '@/config';
import { GlobalStateActionTypes } from '@/commons/constants/globalStateActionTypes';
/**
 * 公共类型存放
 */
export interface CommonTest {
    [index: number]: string;
    [key: string]: any;
}
/**
 * 接口数据返回值 response
 */
export interface ResOutDto<T = any> {
    code: number;
    data: T;
    message: string;
}
/**
 * 将 T 中的所有属性，以及子属性设为只读
 * DeepReadonly<T>
 */
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

// ReadOnly、Partial源码
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P]
// }
// type Partial<T> = {
//     [P in keyof T]?: T[P]
// }
/**
 * any 类型
 */
export type AnyType = any;
/**
 * 应用间通信数据类型
 */
interface RootData {
    params: any;
}
/**
 * qiankun props
 * 注册微应用的 props 类型
 */
export interface QiankunProps {
    container: ParentNode;
    onGlobalStateChange: Function;
    setGlobalState: Function;
    rootConfig: typeof Config;
    rootRouter: VueRouter;
    routerBase: string;
    rootData: RootData;
}
/**
 * 应用跳转传递信息规范
 */
export interface QiankunGlobalStateRoute {
    sender: string; // 发送者
    recipient: string; // 接收着
    type: string; // 类型标识
    appName: string; // 要跳转的应用名称
    menuCode: string; // 要跳转的应用对应菜单名称
    path: string; // 要跳转的应用页面路径
    params: any; // 传递的数据
}
/**
 * qiankun 应用通信全局状态
 */
export interface QiankunGlobalState {
    actionType: GlobalStateActionTypes; //  传递信息的类型
    config: typeof Config; // 配置文件
    route: QiankunGlobalStateRoute; // 应用间跳转
}
