import tripRequest from '@/services/request/index.js'



export function getCityAll() {
    return tripRequest.get({
        url:'/city/all'
    })
}