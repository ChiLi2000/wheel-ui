<demo>常规用法</demo>
<template>
<div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x"  
        :closeOnClickOverlay="false"
        :ok="f1" :cancel="f2"
        >
        <template v-slot:title>
            <strong>加粗标题</strong>
        </template>
        <template v-slot:content>
            <strong>hi</strong>
            <div>hello</div>
        </template>    
    </Dialog>
</div>
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