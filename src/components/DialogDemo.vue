<template>
    <div>Dialog示例</div>
    <h2>示例一</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"  
    :closeOnClickOverlay="false"
    :ok="f1" :cancel="f2"></Dialog>
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
        const f1 = () => {
            return false
        }
        const f2 = () => {
            
        }
        return {x,toggle,f1,f2}
    }
}
</script>