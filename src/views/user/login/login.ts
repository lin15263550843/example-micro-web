import { Component, Vue } from 'vue-property-decorator';
import { LocalStorage } from '@/commons/utils/localStorage';
import { LoginInDto } from './login.dto';
import loginConst from './login.const';
import LoginModule from './login.stoer';

@Component({
    components: {},
})
export default class Login extends Vue {
    private loginConst = loginConst;
    private userInfo: LoginInDto = {
        loginName: '',
        loginPwd: '',
    };
    // 生命周期 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    private beforeCreate() {
        console.log('生命周期：beforeCreate');
    }
    // 生命周期 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
    private created() {
        console.log('生命周期：created');
    }
    // 生命周期 在挂载开始之前被调用：相关的 render 函数首次被调用。
    private beforeMount() {
        console.log('生命周期：beforeMount');
    }
    // 生命周期 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    // 注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
    private mounted() {
        console.log('生命周期：mounted');
        const userInfo = LocalStorage.get(loginConst.localStorageKeys.userLoginInfo);
        if (userInfo) this.userInfo = userInfo; // 记住密码
    }
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    // 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
    private beforeUpdate() {
        console.log('生命周期：beforeUpdate');
    }
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    private updated() {
        console.log('生命周期：updated');
    }
    // 被 keep-alive 缓存的组件激活时调用。
    private activated() {
        console.log('生命周期：activated');
    }
    // 被 keep-alive 缓存的组件停用时调用。
    private deactivated() {
        console.log('生命周期：deactivated');
    }
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    private beforeDestroy() {
        console.log('生命周期：beforeDestroy');
    }
    // 生命周期 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
    private destroyed() {
        console.log('生命周期：destroyed');
    }
    // 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。
    private errorCaptured() {
        console.log('生命周期：errorCaptured');
    }
    // 窗口改变大小
    private onPagerResize() {
        // this.$nextTick(() => {
        // window.onresize = () => {}
        // })
    }

    private login() {
        if (!this.userInfo.loginName) {
            // 弹出需要再次全局封装
            // this.$message({
            //     message: this.$t('placeholder.name'),
            //     type: 'warning'
            // })
            return;
        }
        if (!this.userInfo.loginPwd) {
            // this.$message({ message: this.$t('placeholder.pwd'), type: 'warning' })
            return;
        }
        LoginModule.login(this.userInfo).then(res => {
            console.log('------------------->>>>>>>', this.$Consts);

            const { code, data, message = this.$Consts.unknownError } = res;
            if (code === 0) {
                const { loginId, loginType, loginName } = data;
                LocalStorage.set(loginConst.localStorageKeys.userLoginInfo, this.userInfo);
                LocalStorage.set(loginConst.localStorageKeys.userInfo, { loginId, loginType, loginName });
                this.$router.push('/main/home');
            } else {
                this.$message.error(message);
            }
        });
        LoginModule.testFun(456).then(res => {
            console.log('使用 @MutationAction 时，res 没有返回值，也不需要返回值，因为已经维护到 store中：', res);
        });
    }
}
