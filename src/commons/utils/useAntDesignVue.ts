import Vue from 'vue';
import { message, Input, Button, Icon } from 'lhd-ant-design-vue';
/**
 * 按需引入相应的组件样式
 */
import 'lhd-ant-design-vue/lib/button/style/css';
import 'lhd-ant-design-vue/lib/input/style/css';
import 'lhd-ant-design-vue/lib/icon/style/css';
/**
 * 按需引入组件
 */
export function initAntDesignVue() {
    Vue.use(Button); // 或写为  Vue.component(Button.name, Button)
    Vue.use(Input);
    Vue.use(Icon);
    return message;
}
/**
 * 消息框配置
 */
message.config({
    // top: `100px`,
    duration: 2,
    maxCount: 3,
});
