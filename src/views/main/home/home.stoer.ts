import { Action, getModule, Module, Mutation, VuexModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import Http from '@/commons/http';
import { Urls } from '@/commons/constants';
import { ResOutDto } from '@/commons/dto/index.dto';
import { RegistrableApp } from '@/commons/dto/index.dto';

@Module({
    namespaced: true,
    name: 'home',
    store,
    dynamic: true,
})
class HomeModule extends VuexModule {
    // microApps!: RegistrableApp[]; // 子应用列表
    currentMicroApp: RegistrableApp = {} as RegistrableApp; // 当前选择的子应用
    /**
     * 设置子应用列表
     */
    @Mutation
    setMicroApps(res: ResOutDto<RegistrableApp[]>) {
        if (res) {
            const { code, data } = res;
            if (0 === code && data) {
                // this.microApps = res.data;
            }
        }
    }
    /**
     * 获取用户子应用列表
     */
    @Action
    async getMicroApps(params = {}) {
        // DOTO Urls.login 换成真实的接口
        const res = await Http.get(Urls.fakeInterface, params);
        // this.context.commit('setMicroApps', res);
        return res;
    }
    /**
     * 获取子应用菜单列表
     */
    @Action
    async getMicroAppMenus(params = {}) {
        const res = await Http.get(Urls.fakeInterface, params);
        // this.context.commit('setMicroApps', res);
        return res;
    }
    /**
     * 当前激活的子应用
     * @param {RegistrableApp} 子应用列表选择项
     */
    @MutationAction
    async activateMicroApp(currentMicroApp: RegistrableApp) {
        return { currentMicroApp: currentMicroApp };
    }
}

export default getModule(HomeModule);
