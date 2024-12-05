import tripRequest from '../request'

export function getHomeHotSuggests() {
    return tripRequest.get({
        url: '/home/hotSuggests'
    })
}

export function getCategories() {
    return tripRequest.get({
        url:'/home/categories',
    })
}

export function getHomeHouseList(currentPage) {
    return tripRequest.get({
        url: '/home/houselist',
        params: {
            page:currentPage
        }
    })
}