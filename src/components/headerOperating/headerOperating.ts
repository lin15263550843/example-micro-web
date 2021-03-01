import Config from '@/config';
import { LocalStorage } from './../../commons/utils/localStorage';
import { Component, Vue } from 'vue-property-decorator';
import { Themes, Language, EnvName } from '@/commons/constants';
import { MainContainerStore } from '@/components/mainContainer';
// import { LoginConst } from '@/views/user/login';
import { RouterPaths } from '@/commons/constants/routerPaths';
import { GlobalStateActionTypes } from '@/commons/constants/globalStateActionTypes';

@Component
export default class HeaderOperating extends Vue {
    private env = EnvName[Config.env as keyof typeof EnvName]; // 当前对应环境
    /**
     * 跳转登录页
     */
    private gotoLogin() {
        this.$router.push('/user/login');
    }
    /**
     * 退出登录
     */
    private loginOut() {
        // LocalStorage.remove(LoginConst.localStorageKeys.userInfo);
        LocalStorage.clear();
        this.$router.replace(RouterPaths.login);
    }
    /**
     * 设置主题
     */
    private chooseTheme() {
        const currentTheme = this.$store.state.mainContainer.currentTheme;
        MainContainerStore.setTheme(Themes.PRIMARY === currentTheme ? Themes.RED : Themes.PRIMARY);
        Config.theme = Themes.PRIMARY === currentTheme ? Themes.RED : Themes.PRIMARY;
        this.$microAppStateActions.setGlobalState({ actionType: GlobalStateActionTypes.theme, config: Config });
    }
    /**
     * 切换语言
     */
    private switchLanguage() {
        const locale = Config.language;
        if (Language.zhCN === locale) {
            Config.language = Language.en;
            this.$i18n.locale = Language.en;
        } else {
            Config.language = Language.zhCN;
            this.$i18n.locale = Language.zhCN;
        }
        this.$microAppStateActions.setGlobalState({ actionType: GlobalStateActionTypes.language, config: Config });
    }
}
