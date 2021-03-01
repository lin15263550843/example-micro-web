<!--Created by lhd on 2021-02-09 15:35:22-->
<template>
    <div class="example">
        <h4>我是子应用 example-micro-web 的 example 页面</h4>
        <h4>国际化：{{ $t('example.chinese') }}</h4>
        <router-link to="/main/page1">
            <h4>内部跳转到 page1 页面</h4>
        </router-link>
        <router-link to="/demo/page2">
            <h4>内部跳转到 page2 页面</h4>
        </router-link>
        <h4 @click="gotoMicroApp2('/m/example2/main/example')">跳转到子应用 2 的 example 页面</h4>
        <h4 @click="gotoMicroApp2('/m/example2/main/page1')">跳转到子应用 2 的 page1 页面</h4>
        <h4 @click="gotoMicroApp2('/m/example2/main/notpath')">跳转到子应用 2 的 NotPage 页面(不存在的页面)</h4>
        <span>传递过来的参数：{{ $rootData && $rootData.params }}</span>
    </div>
</template>
<script lang="ts" src="./example.ts" />
<style scoped lang="scss" src="./example.scss" />
