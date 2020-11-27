<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { h } from "vue";
import { Button, openDialog } from "../lib/index";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("p", {}, "标题"),
        content: "这是一段内容",
        ok() {},
        cancel() {},
      });
    };
    return { showDialog };
  },
};
</script>