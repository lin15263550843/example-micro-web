import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({
    namespaced: true,
    name: 'sidebar',
    store,
    dynamic: true,
})
class SidebarStore extends VuexModule {
    /**
     * 当前选中的菜单项
     */
    selectedKeys = '';

    /**
     * 选中菜单
     * @param {string} code  菜单标识
     */
    @MutationAction
    async selectedMenu(code: string) {
        return { selectedKeys: code };
    }
}

export default getModule(SidebarStore);
