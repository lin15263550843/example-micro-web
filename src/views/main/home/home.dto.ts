/**
 * 顶部导航栏
 */
export interface HeaderTab {
    code: string;
    name: string;
    icon: string;
}
/**
 * 左侧菜单栏
 */
export interface SidebarMenu {
    code: string;
    name: string;
    icon: string;
    path: string;
    appName: string;
    childen?: SidebarMenu[];
}
