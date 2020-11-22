<template>
  <div>
    <h1>Switch 开关</h1>
    <p>开关选择器。</p>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <h3>Attributes</h3>
    <TableDemo :tdList="tableList" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import TableDemo from "./TableDemo.vue";

export default {
  components: { Demo, TableDemo },
  setup() {
    const bool = ref(false);
    const tableList = ref<TableList>([
      {
        name: "value",
        description: "绑定值",
        type: "boolean",
        default: "false",
      },
      {
        name: "disabled",
        description: "是否禁用",
        type: "boolean",
        default: "false",
      },
    ]);
    return { Switch1Demo, Switch2Demo, tableList };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 14px;
}
</style>

