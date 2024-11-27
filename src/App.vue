<template>
  <div class="app">
    <router-view/>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/message">订单</router-link>
    <router-link to="/order">消息</router-link> -->
    <tab-bar/>
  </div>
</template>

<script setup lang='ts'>

import { ref, reactive} from 'vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'

</script>

<style lang='less' scoped>

</style>