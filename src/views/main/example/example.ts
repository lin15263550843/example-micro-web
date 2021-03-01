import { GlobalStateActionTypes } from '@/commons/constants/globalStateActionTypes';
import { QiankunGlobalStateRoute } from '@/commons/dto/index.dto';
import { Component, Vue } from 'vue-property-decorator';
/**
 * Created by lhd on 2021-02-09 15:35:22
 */
@Component
export default class Example extends Vue {
    /**
     * 生命周期 挂载完成
     */
    private mounted() {
        // this.$logger.log('this.$rootData--->>>>')(this.$rootData);
    }
    /**
     * 跳转到子应用 2 的 example 页面
     */
    private gotoMicroApp2(path: string) {
        // 方式一
        // 不切换主应用状态的时候可以这么用
        // this.$rootRouter.push(path);

        // 方式二
        // /**
        //  * 定义全局状态
        //  */
        // const globalState: QiankunGlobalState = {
        //     actionType: '', //  传递信息的类型，根据动作类型控制具体操作
        //     config: Config,
        //     // 应用切换传递信息规范
        //     route: {
        //         sender: '', // 发送者
        //         recipient: '', // 接收着
        //         type: '', // 类型标识
        //         appName: '', // 要跳转的应用名称
        //         menuCode: '', // 要跳转的应用对应菜单名称
        //         path: '', // 要跳转的应用页面路径
        //         params: {}, // 传递的数据
        //     },
        // };

        const route: QiankunGlobalStateRoute = {
            sender: 'example-micro-web', // 发送者
            recipient: 'main-app', // 接收着
            type: 'gotoPage', // 类型标识
            appName: 'micro-app-demo2', // 要跳转的应用名称
            menuCode: '', // 要跳转的应用对应菜单名称
            path: path, // 要跳转的应用页面路径
            params: { data: '我是子应用 example-micro-web 的数据' }, // 传递的数据
        };
        // 通知主应用跳转到应用 2
        this.$globalState?.setGlobalState({ actionType: GlobalStateActionTypes.route, route });
    }
}
