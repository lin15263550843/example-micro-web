import { getModule, Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
/**
 * Created by lhd on 2021-02-25 20:20:33
 */
@Module({
    namespaced: true,
    name: 'globalLoading',
    store,
    dynamic: true,
})
class GlobalLoadingModule extends VuexModule {
    /**
     * 是否显示 loading
     */
    isLoading = false;
    /**
     * 更新 loading 状态
     * @param {boolean} isLoading  主题类型
     */
    @MutationAction
    async updateLoading(isLoading: boolean) {
        return { isLoading };
    }
}

export default getModule(GlobalLoadingModule);
