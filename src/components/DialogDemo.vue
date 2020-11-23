<template>
  <h1>Dialog示例</h1>
  <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <h3>Attributes</h3>
  <TableDemo :tdList="tableList" />
  <h3>Slot</h3>
  <TableDemo :tdList="slotList" />
  <h3>Events</h3>
  <TableDemo :tdList="eventList" />
</template>
<script lang="ts">
import { ref } from "vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import Demo from "./Demo.vue";
import TableDemo from "./TableDemo.vue";
export default {
  components: { Demo, TableDemo },
  setup() {
    const tableList = ref<TableList>([
      {
        name: "visible",
        description: "对话框是否显示，可使用 v-model 双向绑定数据",
        type: "boolean",
        default: "false",
      },
      {
        name: "closeOnClickOverlay",
        description: "点击对话框之外的区域是否可以关闭对话框",
        type: "boolean",
        default: "false",
      },
    ]);
    const slotList = ref<TableList>([
      {
        name: "title",
        description: "对话框标题区的内容",
        type: "-",
        default: "-",
      },
      {
        name: "content",
        description: "对话框的内容",
        type: "-",
        default: "-",
      },
    ]);
    const eventList = ref<TableList>([
      {
        name: "ok",
        description: "对话框打开的回调",
        type: "function",
        default: "-",
      },
      {
        name: "cancel",
        description: "对话框关闭的回调",
        type: "function",
        default: "-",
      },
    ]);
    return { tableList, slotList, eventList, Dialog1Demo, Dialog2Demo };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 14px;
}
h3 {
  margin-top: 20px;
}
</style>