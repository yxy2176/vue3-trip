import { getHomeHotSuggests, getCategories,getHomeHouseList } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],

        currentPage: 1,
        houselist:[]
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData() {
            const res = await getCategories()
            this.categories = res.data
        },
        async fetchHouselistData() {
            const res = await getHomeHouseList(this.currentPage)
            // console.log(res);
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})

export default useHomeStore

