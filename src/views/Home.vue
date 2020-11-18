<template>
    <div class="topnavAndBanner">
        <Topnav/>
        <div class="banner">
            <h1>轮子UI</h1>
            <h2>一个很哇塞的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{Topnav}
}
</script>
<style lang="scss" scoped>
$border-radius:4px;
.topnavAndBanner{
    background:linear-gradient(312deg, rgba(31,31,31,1) 0%, rgba(255,255,255,1) 0%, rgba(209,150,254,1) 0%, rgba(241,224,255,1) 100%);
}
.banner{
    color:#8a4aba;
    padding: 100px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    > .actions{
        padding: 8px 0;
        a{
            margin:0 8px;
            color:#ffffff;
           background: linear-gradient(180deg, rgba(209,150,254,1) 0%, rgba(183,93,251,1) 100%);
            display: inline-block;
            border-radius: $border-radius;
            padding: 8px 24px;
        }
    }
}
</style>