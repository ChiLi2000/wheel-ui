<template>
  <div>
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <TableDemo :tdList="tableList" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Demo from "./Demo.vue";
import TableDemo from "./TableDemo.vue";
export default {
  components: { Button, Demo, TableDemo },
  setup() {
    const tableList = ref<TableList>([
      {
        name: "theme",
        description: "按钮类型",
        type: "button | link | text | main | danger",
        default: "button",
      },
      {
        name: "size",
        description: "按钮大小",
        type: "large | normal | small",
        default: "normal",
      },
      {
        name: "disabled",
        description: "按钮禁用",
        type: "boolean",
        default: "false",
      },
      {
        name: "loading",
        description: "按钮加载中",
        type: "boolean",
        default: "false",
      },
    ]);
    return {
      tableList,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  padding-bottom: 14px;
}
</style>