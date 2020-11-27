<demo>
  常规用法
</demo>
<template>
  <div>
    <Button>普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
    <Button theme="main">主要按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
import {Button} from "../lib/index";
export default {
  components: { Button },
};
</script>