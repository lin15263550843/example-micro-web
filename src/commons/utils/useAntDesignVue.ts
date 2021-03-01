import Vue from 'vue';
import { message, Layout, Form, Input, Button, Menu, Icon, Tabs } from 'lhd-ant-design-vue';
/**
 * 按需引入相应的组件样式
 */
import 'lhd-ant-design-vue/lib/message/style/css';
import 'lhd-ant-design-vue/lib/button/style/css';
import 'lhd-ant-design-vue/lib/layout/style/css';
import 'lhd-ant-design-vue/lib/input/style/css';
import 'lhd-ant-design-vue/lib/form/style/css';
import 'lhd-ant-design-vue/lib/menu/style/css';
import 'lhd-ant-design-vue/lib/icon/style/css';
import 'lhd-ant-design-vue/lib/tabs/style/css';
/**
 * 按需引入组件
 */
export function initAntDesignVue() {
    Vue.use(Button); // 或写为  Vue.component(Button.name, Button)
    Vue.use(Layout);
    Vue.use(Input);
    Vue.use(Form);
    Vue.use(Menu);
    Vue.use(Icon);
    Vue.use(Tabs);
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
