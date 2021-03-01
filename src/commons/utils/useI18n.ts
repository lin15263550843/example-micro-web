import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Language } from '@/commons/constants';
import zhCN from '@/commons/languages/zh-CN';
import en from '@/commons/languages/en';
import Config from '@/config';

Vue.use(VueI18n);

/**
 * 国际化
 */
export class UseI18n {
    /**
     * 准备翻译的语言环境信息
     */
    private messages = {
        [Language.zhCN]: zhCN,
        [Language.en]: en,
    };
    /**
     * I18n 实例对象
     */
    private vueI18n: VueI18n | null = null;
    /**
     * 通过选项创建 VueI18n 实例
     */
    private newVueI18n() {
        return new VueI18n({
            locale: Config.language, // 设置地区
            messages: this.messages, // 设置地区信息
        });
    }
    /**
     * 初始化 VueI18n
     */
    public initVueI18n() {
        return (this.vueI18n = this.newVueI18n());
    }
    /**
     * 清除 VueI18n
     */
    public clearVueI18n() {
        this.vueI18n = null;
    }
}
