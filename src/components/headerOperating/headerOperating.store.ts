import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { Themes } from '@/commons/constants';

@Module({
    namespaced: true,
    name: 'headerOperating',
    store,
    dynamic: true,
})
class HeaderOperatingStore extends VuexModule {
    /**
     * 当前主题
     */
    currentTheme: Themes = Themes.PRIMARY;
    /**
     * 设置主题
     * @param {string} theme  主题类型
     */
    @MutationAction
    async setTheme(theme: Themes) {
        return { currentTheme: theme || Themes.PRIMARY };
    }
}

export default getModule(HeaderOperatingStore);
