# micro-web

### 安装依赖

```
yarn install
```

### 启动并在浏览器打开项目

```
yarn dev
```

### 格式化代码

```
yarn format
```

### 打包

```
yarn build
```

### 单元测试

```
yarn test
```

### 整理和修复文件

```
yarn lint
```

### 关于快速生成页面脚本说明

module 代表模块目录，pageName 代表页面名称

#### 1、生成模块

会在 views 目录下生成 module

```
yarn run view module
```

#### 2、生成 vue 页面

会在 views/module 目录下生成 pageName

```
yarn run view module/pageName
```

#### 3、生成 vue 组件

会在相应的目录下生成组件

```
yarn comp module/pageName/componentName
```

### 以上方式都支持多层目录创建

```
yarn run views aaa/bbb/cccDdd/pageName
```

### 目录结构说明

## 参考[目录结构](./docs/实现/目录结构.md)

---

# 详细说明

### 参考 docs 目录下的说明文档，文档目录如下

-   简介

    [简介](./docs/简介/技术栈.md)

    [微前端简介](./docs/简介/微前端简介.md)

    [总体架构](./docs/简介/总体架构.md)

    [微前端简介](./docs/简介/微前端简介.md)

-   实现


    [主应用](./docs/实现/主应用.md)

    [子应用](./docs/实现/子应用.md)

    [子应用](./docs/实现/子应用.md)

    [国际化](./docs/实现/国际化.md)

    [目录结构](./docs/实现/目录结构.md)

    [主题切换](./docs/实现/主题切换.md)

    [全局配置](./docs/实现/全局配置.md)

    [权限控制](./docs/实现/权限控制.md)

    [按需引入](./docs/实现/按需引入.md)

    [应用间跳转](./docs/实现/应用间跳转.md)

    [应用间通信](./docs/实现/应用间通信.md)
