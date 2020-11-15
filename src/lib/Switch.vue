<template>
    <button class="wheel-switch" @click="toggle" :class="{'wheel-checked':value}"><span></span></button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggle = ()=>{
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
}
</script>
<style lang="scss">
$h:22px;
$h2:18px;
.wheel-switch{
    height: $h;
    width: $h*2;
    border:none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    > span{
    position: absolute;
    top:2px;
    left:2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms;
    }
    &:focus{outline: none;}
    &:active{
        > span{width: $h;}}
    &.wheel-checked{background: #1890ff;
        > span {left:calc(100% - #{$h2} - 2px)}}
    &.wheel-checked:active{
        >span{ width: $h; margin-left: -4px;}}
}
</style>