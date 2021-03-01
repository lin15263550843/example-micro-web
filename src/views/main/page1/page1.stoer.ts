import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
/**
 * Created by lhd on 2021-02-25 10:19:38
 */
@Module({
    namespaced: true,
    name: 'page1',
    store,
    dynamic: true,
})
class Page1Module extends VuexModule {}

export default getModule(Page1Module);
