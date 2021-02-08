<!-- 404 page -->
<template>
    <div class="mt-100 text-center">
        <h1>
            <span>找不到该页面</span>
            <br />
            <el-button>
                <router-link to="/home">回首页</router-link>
            </el-button>
        </h1>
    </div>
</template>

<script lang="ts" src="./404.ts"></script>

<style lang="scss">
@import './404.scss';
</style>
