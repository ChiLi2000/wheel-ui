<template>
    <div class="wheel-tabs">
        <div class="wheel-tabs-nav">
            <div class="wheel-tabs-nav-item"
             v-for="(t,index) in titles" :key="index"
             @click="select(t)" :class="{selected: t===selected}">{{t}}</div>
        </div>
         <div class="wheel-tabs-content">
             <component class="wheel-tabs-content-item" 
             v-for="(c,index) in defaults" :is="c" :key="index" 
              :class="{selected: c.props.title===selected}"/>
         </div>
    </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    setup(prors,context){
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是 Tab')          
            }
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        const select=(title:string)=>{
            context.emit('update:selected',title)
        }
        return {defaults,titles,select}
    }
}
</script>

<style lang="scss">
$blue:#40a9ff;
$color:#333;
$border-color:#d9d9d9;

.wheel-tabs{
    &-nav{
        display: flex;
        color:$color;
        border-bottom: 1px solid $border-color;

        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor:pointer;

            &:first-child{
                margin-left: 0;
            }

            &.selected{
                color:$blue;
            }
        }
    }

    &-content{
        padding:8px 0;

        &-item {
            display: none;

            &.selected {
                    display: block;
                }
        }
    }
}
</style>