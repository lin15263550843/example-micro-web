# vue-web

## 安装依赖

```
yarn install
```

## 启动并在浏览器打开项目

```
yarn run start
```

### 格式化代码

```
yarn run format
```

### 生产打包

```
yarn run build
```

### 单元测试

```
yarn run test
```

### 整理和修复文件

```
yarn run lint
```

### 配置项目

### 关于快速生成页面脚本说明

#### 安装插件

##### 安装 silly-datetime 插件

```
npm i silly-datetime --save
```

用来获取系统时间。

##### 安装 chalk 插件

```
yarn add chalk --dev
```

chalk 是一个颜色的插件，用来修改命令行显示颜色，更美观。

#### 使用插件

##### 配置

```
  "scripts": {
    "views": "node scripts/generateView/generateView.js views",
    "cpt": "node scripts/generateView/generateView.js cpt",
    "page": "node scripts/generateView/generateView.js page"
  }
```

在 package.json 中配置

##### 1、生成 vue 普通页面

```
yarn run views file-name
```

会生成在 views 目录下

##### 2、生成 vue 组件

```
yarn run cpt file-name
```

会生成在 components 目录下

##### 3、生成单个页面

```
yarn run page views/components/tables/file-name.vue
```

默认会生成在 src 目录下的，需要拼写文件名后缀。

####以上方式都支持多层目录创建

```
yarn run views aaa/bbb/ccc-ddd/file-name
```

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
├── scripts                             // node脚本
│   └── generateView.js                 // 用来生成视图与组件

├── src                                 // 源代码
│   ├── assets                          // 静态资源
│   ├── commons                         // 公共文件
│   │   ├── http                        // http 接口请求
│   │   │  ├── api.ts                            // 接口列表文件
│   │   │  └── index.ts                           // 接口请求配置
│   │   ├── styles                      // 公共样式
│   │   ├── utils                       // 工具
│   │   │   ├── index.ts                // 工具入口
│   │   │   └── utils.ts                // 工具类
│   │   └──
│   ├── components                      // 公共组件，COMPONENTS.md 中维护组件说明
│   ├── router                          // 路由
│   │   ├── index.ts                    // 路由配置入口
│   │   └── routes.ts                   // 路由列表
│   ├── store                           // vuex 状态管理
│   │   ├── index.ts                    // vuex 主入口

│   │   └── module                       // 模块目录
│   │       └── views                   // 视图状态模块
│   │       └── component               // 组件状态模块

│   ├── views                           // 视图目录（主要开发目录）
│   ├── App.vue                         // Vue 根文件
│   ├── config.ts                       // 项目配置文件
│   ├── main.ts                         // 应用主入口
│   ├── shims-tsx.d.ts                  // ts 支持文件
│   ├── shims-vue.d.ts                  // ts 支持文件
├── .env                                // 环境变量配置文件
├── .env.development                    // 开发模式
├── .env.production                     // 生产模式
├── .eslintignore                       // eslint 规则忽略
├── .eslintrc.js                        // eslint 规则文件
├── .gitignore                          // Git 提价忽略文件
├── babel.config.js                     // Babel 配置文件
├── COMPONENTS.md                       // 公共组件概览
├── package.json                        // node 项目配置及模块管理文件
├── tsconfig.json                       // ts 配置文件
├── vue.config.js                       // Vue 配置文件
├── README.md                           // 工程说明
├── webpack.config.js                   // webpack 配置文件，虚拟的，实际打包不会用到
└── yarn.lock                           // yarn 包管理文件
```
