<template>
    <div class="manage-system-home">
        <a-layout class="home-layout">
            <a-layout-sider width="240">
                <Sidebar :menus="microAppMenus" :callback="chooseSidebarMenu" />
            </a-layout-sider>
            <a-layout>
                <Header :tabs="microApps" :callback="chooseHeaderTabs" />
                <a-layout-content class="layout-content">
                    <a-tabs
                        class="tabs"
                        type="editable-card"
                        v-model="$store.state.sidebar.selectedKeys"
                        @edit="onTabsEdit"
                        @change="onTabsChange"
                    >
                        <a-tab-pane
                            v-for="item in homeTabs"
                            :key="item.code"
                            :tab="item.name"
                            :closable="item.closable"
                        />
                    </a-tabs>
                    <div id="micro-app-container-only" />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script lang="ts" src="./home.ts" />
<style scoped lang="scss" src="./home.scss" />
