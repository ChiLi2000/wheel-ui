<demo>
  常规用法
</demo>
<template>
    <div>
        <Button @click="onClick">你好</Button>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button}
}
</script>