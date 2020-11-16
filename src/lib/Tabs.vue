<template>
    <div>
        Tabs组件
         <div v-for="(t,index) in titles" :key="index">{{t}}</div>
         <component v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue'
export default {
    setup(prors,context){
        const defaults = context.slots.default()
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        return {defaults,titles}
    }
}
</script>