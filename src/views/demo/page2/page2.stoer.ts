import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
/**
 * Created by lhd on 2021-02-28 22:50:20
 */
@Module({
    namespaced: true,
    name: 'page2',
    store,
    dynamic: true,
})
class Page2Module extends VuexModule {}

export default getModule(Page2Module);
