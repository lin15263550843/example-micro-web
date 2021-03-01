import Login from './login.vue';

export { default as LoginModule } from './login.stoer';
export { default as LoginConst } from './login.const';
export * from './login.dto';
export default Login;

// import LoginCopy from './template/loginCopy.vue'
// import LoginCopy2 from './template/loginCopy2.vue'
// import LoginCopy3 from './template/loginCopycopy3.vue'
// import LoginCopy4 from './template/loginCopycopy4.vue'
// import LoginCopy5 from './template/loginCopycopy5.vue'

// import Config from '@/config'
// (alias) const Login: VueConstructor<Vue>

// function getExportDefaultView() {
//     switch (Config.language) {
//         case 'en':
//             return Login
//         case 'zh-CN':
//             return LoginCopy
//         case 'zh-TW':
//             return LoginCopy2
//         // case 'eo':
//         //     return LoginCopy3
//         // case 'eo1':
//         //     return LoginCopy4
//         // case 'eo2':
//         //     return LoginCopy5
//         default:
//             return LoginCopy
//     }
// }
// // // getExportDefaultView()
// // // export default Login
// // // export default LoginCopy
// const ed = getExportDefaultView()
// export default ed

// export default (() => {
//     switch (Config.language) {
//         case 'en':
//             return Login
//         case 'zh-CN':
//             return Login
//         case 'zh-TW':
//             return LoginCopy
//         default:
//             return Login
//     }
// })()
