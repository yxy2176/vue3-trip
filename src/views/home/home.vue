<template>
    <div class="home">
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <home-search-box></home-search-box>
        <home-categories></home-categories>
        <div class="search-bar" v-if="isShowSearchBar">
            <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
        </div>
        <home-content/>
        <button @click="moreBtnClick">加载更多</button>
    </div>
</template>

<script setup lang="ts">
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./components/home-nav-bar.vue";
import HomeSearchBox from "./components/home-search-box.vue";
import HomeCategories from "./components/home-categories.vue"
import HomeContent from "./components/home-content.vue"
import useScroll from '@/hooks/useScroll'
import {watch, computed} from 'vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()


const moreBtnClick= () =>{
    console.log("加载更多的数据");
    homeStore.fetchHouselistData()
}

const {isReachBottom,scrollTop} = useScroll()
watch(isReachBottom,(newValue)=>{
    if(newValue){
        homeStore.fetchHouselistData().then(()=>{
            isReachBottom.value=false
        })
    }
})

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})



</script>

<style scoped lang="less">
.home {
    padding-bottom: 100px;
}

.banner {
    img {
        width: 100%;
    }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
