<template>
    <div class="city top-page">
        <div class="top">
            <van-tabs
                v-model:active="tabActive"
                color="#ff9854"
                line-height="3">
                <template v-for="(value, key, index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key" ></van-tab>
                </template>
            </van-tabs>
            <!-- show-action : 是否显示取消按钮 -->
            <van-search
                v-model="searchValue"
                shape="round"
                show-action
                placeholder="城市/区域/位置"
                @cancel="concelClick"
            >
            </van-search>
        </div>

        <div class="content">
            <template v-for="(value,key,index) in allCities">
                <city-group v-show="tabActive===key" :group-data="value"></city-group>
            </template>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
// import tripRequest from "@/services/request/index.js"
import { getCityAll } from "@/services/index";
import CityGroup from "./components/city-group.vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();

//搜索框的值
const searchValue = ref("");

// 点击取消 ->退回上一级路由
const concelClick = () => {
    router.back();
};

//tab键的切换
const tabActive = ref();

// tripRequest.get({
//     url:"/city/all"
// }).then(res=>{
//     console.log(res)
// })
const allCity = ref({}); //默认给一个空对象
getCityAll().then((res) => {
    allCity.value = res.data;
    // console.log("allCity.value",res.data)
});

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[tabActive.value]);


</script>

<style lang="less" scoped>
// .top{
//     position:fixed;
//     top:0;
//     left:0;
//     right:0;
// }

// .content{
//     margin-top:98px;
// }
.content {
    height: calc(100vh -98px);
    overflow-y: auto;
}
</style>
