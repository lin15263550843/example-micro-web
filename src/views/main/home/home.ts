import { SidebarMenu } from './home.dto';
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import SidebarStore from '@/components/sidebar/sidebar.store';
import { Consts } from '@/commons/constants';
import { initMicroApps } from '@/commons/qiankun/initMicroApps';
import HomeModule from './home.stoer';
import { QiankunGlobalStateRoute, RegistrableApp } from '@/commons/dto/index.dto';
import { GlobalLoadingModule } from '@/components/globalLoading';
import { GlobalStateActionTypes } from '@/commons/constants/globalStateActionTypes';
/**
 * 首页
 */
@Component({
    components: { Header, Sidebar },
})
export default class Home extends Vue {
    private microApps: RegistrableApp[] = []; // 顶部导航微应用栏菜单
    private sidebarMenus: SidebarMenu[] = []; // 左侧导航栏菜单
    private microAppMenus: SidebarMenu[] = []; // 左侧导航栏菜单
    private homeTabs: SidebarMenu[] = []; // 面包屑列表
    private activeTab = ''; // 当前激活的 path
    /**
     * 生命周期 实例生成
     */
    private created() {
        this.getMicroAps();
    }
    /**
     * 设置左侧菜单选中项，跳转到对应页面
     */
    private selectedMenu(appItem: RegistrableApp, item: SidebarMenu) {
        // 重复点击菜单或 tab 页时，直接返回
        if (item.code === this.activeTab) return;
        // 如果 tabs 已存在该标签页则切换到该标签页，否则添加新的标签页并打开
        const isItem = this.homeTabs.find(i => i.code === item.code);
        if (!isItem) this.homeTabs.push(item);
        if (item.path) {
            this.microAppMenus = JSON.parse(JSON.stringify(this.sidebarMenus));
            SidebarStore.selectedMenu(item.code);
            HomeModule.activateMicroApp(appItem);
            this.activeTab = item.code;
            this.$router.push(item.path);
        } else {
            this.activeTab = '';
        }
    }
    /**
     * 获取左侧菜单栏选中项
     * @param {RegistrableApp} microApp 要切换的子应用
     * @param {SidebarMenu} menuItem 要选择的菜单
     */
    private getSelectedItem(microApp: RegistrableApp, menuItem?: SidebarMenu) {
        let item; // 要切换的菜单项
        // menuItem 存在说明是从 tab 标签页切换的，先验证最新权限是否包含该项
        if (menuItem) {
            const isItem = this.sidebarMenus.find(pi => pi.childen && pi.childen.find(i => i.code === menuItem.code));
            // 验证通过后切换到当前菜单，否则关闭
            if (isItem) {
                item = menuItem;
            } else {
                this.homeTabs = this.homeTabs.filter(item => item.code !== menuItem.code);
            }
        } else {
            // 从顶部导航栏切换时，如果 homeTabs 中存在该应用的菜单，默认选中第一个
            const existItem = this.homeTabs.find(i => i.appName === microApp.name);
            if (existItem) {
                item = existItem;
            } else {
                // 如果 homeTabs 中不存在该应用的菜单，则默认选中菜单列表的第一项
                const menus = this.sidebarMenus[0]?.childen;
                item = menus && menus[0];
            }
        }
        item?.path && this.selectedMenu(microApp, item);
    }
    /**
     * 根据子应用传递的参数查询左侧菜单栏
     */
    private querySelectedItem(appItem: RegistrableApp, route: QiankunGlobalStateRoute) {
        let item!: SidebarMenu;
        this.sidebarMenus.forEach(items => {
            if (items && items.childen) {
                items.childen.forEach(item2 => {
                    if (item2 && item2.path === route.path) {
                        item = item2;
                    }
                });
            }
        });
        if (item) {
            // 该方法使用地址栏传参，子应用使用 this.$route.query 获取
            // this.$router.push({
            //     // name: route.path,
            //     path: route.path,
            //     query: route.params,
            // });
            this.$transmission.setParams(route.params);
            item?.path && this.selectedMenu(appItem, item);
        } else {
            this.$message.warning(this.$Consts.forbidden);
            // 没权限先默认第一个菜单，到时候根据具体业务要求去控制
            // const menus = this.sidebarMenus[0]?.childen;
            // item = menus && menus[0];
        }
    }
    /**
     * 获取左侧菜列表
     * @param microApp 要切换的子应用
     * @param menuItem 要选择的菜单
     * @param route 应用间跳转传递的参数
     */
    private getMicroAppMenus(microApp: RegistrableApp, menuItem?: SidebarMenu, route?: QiankunGlobalStateRoute) {
        const nicroAppName = microApp.name;
        // 获取子应用菜单列表
        // TODO 该处的逻辑是实时更新获取左侧菜单列表，如果不要求实时更新可以先都缓存起来
        HomeModule.getMicroAppMenus({ userId: nicroAppName }).then(res => {
            const { code, data, message } = res;
            if (code === 200 && data) {
                this.sidebarMenus = data.sideBarMenusData[nicroAppName] || [];
                if (this.sidebarMenus.length > 0) {
                    if (route) {
                        // 从子应用跳转的
                        this.querySelectedItem(microApp, route);
                    } else {
                        this.getSelectedItem(microApp, menuItem);
                    }
                }
            } else {
                this.$message.error(message);
            }
        });
    }
    /**
     * 切换顶部导航栏子应用
     */
    private chooseHeaderTabs(item: RegistrableApp) {
        // 防止重复点击
        if (item.name === this.$store.state.home.currentMicroApp.name) return;
        this.getMicroAppMenus(item);
    }
    /**
     * 查询子应用
     */
    private queryAppItem(appName?: string) {
        return this.microApps.find(i => i.name === appName);
    }
    /**
     * 切换左侧导航栏菜单
     */
    private chooseSidebarMenu(item: SidebarMenu) {
        const appItem = this.queryAppItem(item.appName);
        appItem && item?.path && this.selectedMenu(appItem, item);
    }

    /**
     * 新增和删除页签的回调
     * @param targetKey 当前页的 key 值
     * @param action 类型
     */
    private onTabsEdit(targetKey: string, action: string) {
        if (this.homeTabs.length === 1) return;
        if (Consts.menuRemoveFlag === action) {
            this.homeTabs = this.homeTabs.filter(item => item.code !== targetKey);
            // tab 页签列表不为空，且关闭的是当前显示页，则切换到第一个页签
            if (this.homeTabs.length > 0 && this.$store.state.sidebar.selectedKeys === targetKey) {
                // SidebarStore.selectedMenu(this.homeTabs[0].code);
                const appItem = this.queryAppItem(this.homeTabs[0].appName);
                appItem && this.getMicroAppMenus(appItem);
            }
        }
    }
    /**
     * 切换标签页的回调
     * @param activeKey 切换页面的 key 值
     */
    private onTabsChange(activeKey: string) {
        // 重复点击当前tab页时，直接返回
        if (activeKey === this.activeTab) return;
        const item = this.homeTabs.find(i => i.code === activeKey);
        const appItem = this.queryAppItem(item?.appName);
        if (item && appItem) {
            // 相当于同一个子应用通过主应用去却换页面
            if (appItem.name === this.$store.state.home.currentMicroApp.name) {
                this.selectedMenu(appItem, item);
            } else {
                this.getMicroAppMenus(appItem, item);
            }
        }
    }
    /**
     * 切换子应用
     * @param {QiankunGlobalStateRoute} route 应用传递的信息
     */
    private switchMicroApp(route: QiankunGlobalStateRoute) {
        if (!route.appName || !route.path) {
            this.$message.error(this.$Consts.notPath);
            return;
        }
        // 查询用户是否有将要跳转的子应用权限，以及
        const appItem = this.queryAppItem(route.appName);
        // 根据 path 查询要跳转的页面是否在 tab 页签中
        const item = this.homeTabs.find(i => i.path === route.path);
        if (appItem) {
            // 如果要跳转的应用已经是选中状态，并且 tab 页签中存在该菜单，只切换左侧菜单状态，否则就更新左侧菜单，且打开要跳转的页面
            if (item && appItem.name === this.$store.state.home.currentMicroApp.name) {
                this.selectedMenu(appItem, item);
            } else {
                this.getMicroAppMenus(appItem, undefined, route);
            }
        } else {
            // 没有该子应用的权限不予跳转，可以考虑给个提示
        }
    }
    /**
     * 监听子应用切换
     */
    private onSwitchMicroApp() {
        this.$microAppStateActions.onGlobalStateChange((state, prev) => {
            // state: 变更后的状态; prev 变更前的状态
            this.$logger.log('主应用监听到状态变更--->>>')(state, prev);
            if (!state) return;
            if (GlobalStateActionTypes.route === state.actionType && state.route) {
                this.switchMicroApp(state.route || {});
            }
        });
    }
    /**
     * 获取用户子应用列表
     * or
     * 获取顶部导航栏菜单栏
     */
    private getMicroAps() {
        GlobalLoadingModule.updateLoading(true);
        // 获取用户子应用列表
        HomeModule.getMicroApps({ userId: 123 }).then(res => {
            const { code, data, message = '' } = res;
            if (code === 200 && data) {
                this.microApps = data.defaultMicroApps || [];
                const microApp = this.microApps[0];
                if (microApp) {
                    initMicroApps(this.$router, this.microApps);
                    this.onSwitchMicroApp();
                    this.getMicroAppMenus(microApp);
                }
            } else {
                this.$message.error(message);
            }
        });
    }
}
