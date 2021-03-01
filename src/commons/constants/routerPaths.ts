/**
 * 路由跳转地址列表
 *
 * 为了方便统一修改跳转地址，解决修改多个入口跳转同一个页面，需要满世界去找跳转地址的问题，统一抽出来了，方便你我他，幸福千万家
 */
export const enum RouterPaths {
    login = '/user/login',
    main = '/m',
    page403 = '/403',
    page404 = '/404',
}
