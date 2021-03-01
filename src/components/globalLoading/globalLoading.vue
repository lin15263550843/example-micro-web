<!--Created by lhd on 2021-02-25 20:20:33-->
<template>
    <div class="globalLoading" v-if="$store.state.globalLoading.isLoading">
        <h3>loading...</h3>
        {{ $store.state.globalLoading.isLoading }}
    </div>
</template>
<script lang="ts" src="./globalLoading.ts" />
<style scoped lang="scss" src="./globalLoading.scss" />
