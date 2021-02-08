import { LoginInDto, UserDto } from './login.dto';
import { Action, getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import Http from '@/commons/http';
import { Urls } from '@/commons/constants';
import { ResOutDto } from '@/commons/dto/index.dto';
// import { LocalStorage } from '@/commons/utils/localStorage'
// import { loginConst } from '@/views/login/login.const'

@Module({
    namespaced: true,
    name: 'login',
    store,
    dynamic: true,
})
class LoginModule extends VuexModule {
    userInfo!: UserDto; // 用户登录信息
    test = { x: 123 };
    /**
     * 用户登录信息维护到全局
     *
     * @param userInfo 用户登录信息
     */
    @Mutation
    addUserInfo(resData: ResOutDto<UserDto>) {
        if (resData) {
            const { code, data } = resData;
            if (0 === code && data) {
                const { loginId, loginName, loginType } = resData.data;
                this.userInfo = { loginId, loginName, loginType };
            }
        }
    }
    /**
     * 登录
     *
     * @param params 登录参数
     */
    @Action
    async login(params: LoginInDto) {
        console.log('userInfo:::', params);
        const resData = await Http.post(Urls.login, params);
        this.context.commit('addUserInfo', resData);
        console.log('resData:::', resData);
        return resData;
    }
    /**
     * 测试
     * @param num
     */
    @MutationAction
    async testFun(num: number) {
        const test = { x: num };
        return { test };
    }
}

export default getModule(LoginModule);
