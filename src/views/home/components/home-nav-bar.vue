<template>
  <div class="nav-bar">
        <div class="title">弘源旅途</div>
  </div>
</template>

<script setup lang='ts'>

import { ref, reactive} from 'vue'

</script>

<style lang='less' scoped>
.nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    height:46px;
    border-bottom: 1px solid #f2f2f2;

    .title{
        color:var(--primary-color);
        font-size:18px;
        font-weight: 600;
    }
}
</style>