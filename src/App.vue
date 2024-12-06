<template>
  <div class="app">
    <router-view/>
    <tab-bar v-show="!route.meta.hideTabBar"/>
    <loading/>
  </div>
</template>

<script setup lang='ts'>

import { ref, reactive} from 'vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from "vue-router"
import loading from './components/loading/loading.vue'

const route = useRoute()

</script>

<style lang='less' scoped>

</style>