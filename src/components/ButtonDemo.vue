<template>
    <div>Button 示例</div>
    <h2>示例1</h2>
    <div>
        <Button >你好</Button>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
    setup(){
     const onClick = ()=>{
         console.log('hi')
     }   
     return {onClick}
    }
}
</script>