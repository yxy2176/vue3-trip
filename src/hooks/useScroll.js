import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

export default function useScroll(elRef) {
    let el = window

    const isReachBottom = ref(false)

    const clientHeight = ref(0)  // 可见区域的高度
    const scrollTop = ref(0)  // 顶部被卷走的高度
    const scrollHeight = ref(0)  // 整个文档内容的高度

    // 防抖 or 节流 ==>这里使用节流更合适
    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }

        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            console.log("滚动到底部了");
            isReachBottom.value = true
        }
    }, 100)

    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
        el.removeEventListener("scroll", scrollListenerHandler)
    })


    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}