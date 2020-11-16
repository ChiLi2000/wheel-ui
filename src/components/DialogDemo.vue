<template>
    <div>Dialog示例</div>
    <h2>示例一</h2>
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
    <h2>示例二</h2>
    <Button @click="showDialog">showDialog</Button>
</template>
<script lang="ts">
import { ref ,h} from 'vue'
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import {openDialog} from '../lib/openDialog'
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
        const showDialog = ()=>{
            openDialog({
                title:h('strong',{},'标题'),
                content:'你好',
                closeOnClickOverlay:'true',
                 ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {x,toggle,f1,f2,showDialog}
    }
}
</script>