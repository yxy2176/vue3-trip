export const getAssetURL = (image) => {
    // 第一个参数：相对路径
    // 第二个参数：当前路径的URL（是一个 JavaScript 中的内置对象 -> 返回当前模块的 完整 URL ）
    // console.log(import.meta.url)
    return new URL(`../assets/img/${image}`, import.meta.url).href

}