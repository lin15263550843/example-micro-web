import { SidebarMenu } from '@/views/main/home/home.dto';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { SelectMenu } from './sidebar.dto';
import SidebarStore from './sidebar.store';

@Component
export default class Sidebar extends Vue {
    /**
     * 要展示在左侧的菜单列表
     */
    @Prop({ default: [] }) private menus!: SidebarMenu[];
    /**
     * 满足筛选条件的菜单列表
     */
    private menuList: SidebarMenu[] = [];
    /**
     * 点击菜单回调函数
     */
    @Prop() private callback!: Function;

    // private defaultSelectedKeys = ''; // 初始选中的菜单项 key 数组
    private defaultOpenKeys = ''; // 初始展开的 SubMenu 菜单项 key 数组
    private searchText = ''; // 菜单赛选条件
    @Watch('searchText') // 菜单赛选条件
    onSearchTextChanged(val: string) {
        this.menuList = this.menus.filter(item => item.name.includes(val));
    }
    @Watch('menus') // 菜单列表
    onMenusChanged(val: SidebarMenu[]) {
        this.menuList = val;
        this.initSelectedItem();
    }

    private created() {
        this.menuList = this.menus;
        this.initSelectedItem();
    }
    /**
     * 选中项
     * @param item
     */
    private selectMenu(item: SelectMenu) {
        SidebarStore.selectedMenu(item.key);
    }
    /**
     * 初始化默认选中项
     */
    private initSelectedItem() {
        if (
            this.menuList &&
            this.menuList[0] &&
            this.menuList[0].childen &&
            this.menuList[0].childen[0] &&
            this.menuList[0].childen[0].code
        ) {
            this.defaultOpenKeys = this.menuList[0].code;
        }
    }
}
