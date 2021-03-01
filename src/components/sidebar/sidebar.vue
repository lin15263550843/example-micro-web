<template>
    <div class="sidebar">
        <div class="logo img-span-middle">
            <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="user flex-start">
            <div class="avatar">
                <img src="@/assets/icon.png" alt="" />
            </div>
            <div class="user-info">
                <span>{{ $t('mainHome.administrator') }}</span>
                <div class="status flex-start">
                    <div class="dots" />
                    <span>{{ $t('mainHome.status') }}</span>
                </div>
            </div>
        </div>
        <div class="search">
            <a-input v-model="searchText" placeholder="搜索">
                <img class="suffix" slot="suffix" src="@/assets/images/commons/sidebar/search.svg" />
                <!-- <a-icon slot="suffix" type="smile" /> -->
            </a-input>
        </div>
        <a-menu
            class="menu"
            mode="inline"
            theme="dark"
            :default-open-keys="[defaultOpenKeys]"
            :selectedKeys="[$store.state.sidebar.selectedKeys]"
            @select="selectMenu"
            :style="{ height: '100%', borderRight: 0 }"
        >
            <!-- :default-selected-keys="[defaultSelectedKeys]" -->
            <a-sub-menu v-for="item1 in menuList" :key="item1.code">
                <span slot="title"><a-icon :type="item1.icon" />{{ item1.name }}</span>
                <a-menu-item v-for="item2 in item1.childen" :key="item2.code" @click="callback(item2)">
                    {{ item2.name }}
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script lang="ts" src="./sidebar.ts"></script>

<style scoped lang="scss" src="./sidebar.scss"></style>
