<template>
    <div class="header-operating flex-start">
        <div>
            <span>{{ env }}</span>
        </div>
        <div @click="loginOut">
            <span>退出登录</span>
        </div>
        <div @click="gotoLogin">
            <span>登录/注册</span>
        </div>
        <div @click="switchLanguage">
            <span>{{ $t('mainHome.language') }}</span>
            <i class="el-icon-arrow-down" />
        </div>
        <div key="3" @click="chooseTheme">
            <span>主题切换</span>
        </div>
        <a-icon type="setting" style="color: white; font-size: 18px;" theme="filled" />
    </div>
</template>
<script lang="ts" src="./headerOperating.ts"></script>

<style scoped lang="scss" src="./headerOperating.scss"></style>
