import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()

class tripRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 请求拦截器 （成功时候返回config对应的结果，失败返回err对应的结果）
        this.instance.interceptors.request.use(config => {
            mainStore.isLoading = true
            return config
        }, err => {
            return err
        })
        // 响应拦截器
        this.instance.interceptors.response.use(res => {
            mainStore.isLoading = false
            return res
        }, err => {
            mainStore.isLoading = false
            return err
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    // 传入的时候，注意 config是一个对象
    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

export default new tripRequest(BASE_URL, TIMEOUT)