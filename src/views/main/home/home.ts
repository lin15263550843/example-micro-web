import { Component, Vue } from 'vue-property-decorator';
import { columns, data } from './home.const';
/**
 * 首页
 */
@Component
export default class Home extends Vue {
    private columns = columns;
    private data = data;
    private selectedRowKeys: string[] = [];

    /**
     * 生命周期 实例生成
     */
    private created() {
        console.log('init');
    }

    // 返回主页面
    private goBackMain() {
        this.$rootRouter.push('/main');
    }
    // 跳转到另一个子应用
    private gotoYJWZ() {
        this.$rootRouter && this.$rootRouter.push('/yjwz/#/resourceOrderList');
    }
    // // 切换tab页
    // private homeTabcallback(index: number) {
    //     console.log('------------------------------->>>', homeTabs[index]);
    // }
    private onSelectChange(selectedRowKeys: string[]) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
    }
}
