<template>
    <div>Dialog示例</div>
    <h2>示例一</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"></Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
export default {
    components:{
        Button,
        Dialog
    },
    setup(){
        const x = ref(false)
        const toggle = ()=>{
            x.value = !x.value
        }
        return {x,toggle}
    }
}
</script>