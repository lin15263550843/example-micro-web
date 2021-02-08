import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { Themes } from '@/commons/constants';

@Module({
    namespaced: true,
    name: 'mainContainer',
    store,
    dynamic: true,
})
class MainContainerStore extends VuexModule {
    /**
     * 当前主题
     */
    currentTheme: Themes = Themes.YJWZ_PRIMARY;
    /**
     * 设置主题
     * @param {string} theme  主题类型
     */
    @MutationAction
    async setTheme(theme: Themes) {
        return { currentTheme: theme || Themes.YJWZ_PRIMARY };
    }
}

export default getModule(MainContainerStore);
