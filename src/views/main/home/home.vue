<template>
    <div class="home">
        <a-table
            :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :data-source="data"
        />
    </div>
</template>
<script lang="ts" src="./home.ts" />
<style scoped lang="scss" src="./home.scss" />
