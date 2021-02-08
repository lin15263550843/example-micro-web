<template>
    <div class="login">
        <div class="login-box">
            <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
                <a-form-item :label="$t('login.labels.name')">
                    <a-input type="text" v-model="userInfo.loginName" :placeholder="$t('login.placeholder.name')" />
                </a-form-item>
                <a-form-item :label="$t('login.labels.pwd')">
                    <a-input type="password" v-model="userInfo.loginPwd" :placeholder="$t('login.placeholder.pwd')" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24 }">
                    <a-button class="button" type="primary" @click="login">{{ $t(loginConst.button) }}</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" src="./login.ts" />
<style scoped lang="scss" src="./login.scss" />
