<template>
  <div>
    <h1>Tabs 示例</h1>
    <Demo :component="Tab1Demo" />
    <h3>Attributes</h3>
    <TableDemo :tdList="tableList" />
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import Tab1Demo from "./Tabs1.demo.vue";
import Demo from "./Demo.vue";
import TableDemo from "./TableDemo.vue";
export default {
  components: {
    Demo,
    TableDemo,
  },
  setup() {
    const tableList = ref<TableList>([
      {
        name: "selected",
        description: "绑定值，使用 v-model 双向绑定数据",
        type: "boolean",
        default: "false",
      },
    ]);
    return { Tab1Demo, tableList };
  },
};
</script>