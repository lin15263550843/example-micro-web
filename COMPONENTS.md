# vue-web

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构

```tree
┌─────────────────────────────────────────────────────────────────────
├── dist                                // 打包输出目录
├── node_modules                        // 依赖安装目录
├── public                              // 公共目录
│   ├── favicon.ico                     // 站点icon
│   ├── image                           // 图片目录
│   ├── index.html                      // 入口文件
│   └── manifest.json                   // manifest配置文件
│
├── script                              // 脚本文件夹
│   └── generate.js                     // node脚本，用来生成视图与组件

├── src                                 // 源代码
│   ├── assets                          // 静态资源
│   ├── commons                         // 公共文件
│   ├── components                      // 公共组件，componentsOverview.md 中维护组件说明
│   ├── router                          // 路由
│   │   ├── index.ts                    // 路由配置入口
│   │   └── routes.ts                   // 路由列表
│   ├── store                           // vuex 状态管理
│   │   ├── index.ts                    // vuex 主入口
│   │   └── module                      // 模块目录
│   │       └── views                   // 视图状态模块
│   │       └── component               // 组件状态模块


│   ├── utils                           // 工具目录
│   │   └── index.ts                    // 入口
│   ├── config                          // 项目配置文件
│   │   └── config.ts                   // 项目配置文件
│   ├── main.ts                         // 程序主入口
│   ├── request                         // 请求相关目录
│   │   ├── api.ts                      // 接口列表文件
│   │   └── index.ts                    // 接口请求配置
│   ├── shims-tsx.d.ts                  // vue ts支持文件
│   ├── shims-vue.d.ts                  // vue ts支持文件
│   └── views                           // 视图目录
├── tsconfig.json                       // ts配置文件
├── tslint.json                         // ts编码约束文件
├── vue.config.js                       // vue工程配置文件
├── babel.config.js                     // babel 配置文件
├── package.json                        // node 项目配置及模块管理文件
├── README.md                           // 工程说明
└── yarn.lock                           // yarn 包管理文件
```
