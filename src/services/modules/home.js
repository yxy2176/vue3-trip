import tripRequest from '../request'

export function getHomeHotSuggests() {
    return tripRequest.get({
        url: '/home/hotSuggests'
    })
}