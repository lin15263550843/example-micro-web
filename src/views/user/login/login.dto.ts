/**
 * 登录接口入参
 */
export interface LoginInDto {
    loginName: string;
    loginPwd: string;
}
/**
 * 登录接口出参，用户信息
 */
export interface UserDto {
    loginId: string; // 用户 ID
    loginType: string; // 用户类型
    loginName: string; // 用户名称
    // ...
}
