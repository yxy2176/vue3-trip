<template>
    <div class="home">
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <home-search-box></home-search-box>
    </div>
</template>

<script setup lang="ts">
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./components/home-nav-bar.vue";
import HomeSearchBox from "./components/home-search-box.vue";


// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()



</script>

<style scoped lang="less">
.home {
  padding-bottom: 100px;
}

.banner {
  img {
    width: 100%;
  }
}</style>
