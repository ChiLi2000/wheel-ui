<template>
    <div>Dialog示例</div>
    <h2>示例一</h2>
    <div style="position: relative; z-index: 1;">
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x"  
        :closeOnClickOverlay="false"
        :ok="f1" :cancel="f2"
        >
            <template v-slot:title>
                <strong>标题</strong>
            </template>
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>    
        </Dialog>
    </div>
    <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
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