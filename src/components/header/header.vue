<template>
    <a-layout-header class="header flex-between">
        <div class="header-left flex-start">
            <a-menu class="menu" mode="horizontal" :selectedKeys="[$store.state.home.currentMicroApp.name || '']">
                <a-menu-item v-for="item in tabs" :key="item.name" @click="callback(item)">
                    <a-icon type="smile" />
                    <span>{{ item.name }}</span>
                </a-menu-item>
            </a-menu>
        </div>
        <div class="header-operating">
            <HeaderOperating />
        </div>
    </a-layout-header>
</template>
<script lang="ts" src="./header.ts"></script>

<style scoped lang="scss" src="./header.scss"></style>
