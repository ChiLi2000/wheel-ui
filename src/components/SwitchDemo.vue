<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="bool"/>
      </div>
      <div class="demo-actions">
        <Botton>查看代码</Botton>
     </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled </h2>
    <div class="demo-component">
      <Switch v-model:value="bool" disabled />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from '../lib/Button.vue'
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>

<style lang="scss" scoped>
  $border-color:#d9d9d9;

  %item {
    padding:8px 16px;
    border-top:1px dashed $border-color;
  }
  .demo{
    border:1px solid $border-color;
    margin:16px 0 32px;

    >h2{
      font-size: 20px;
      padding:8px 16px;
      border-bottom:1px solid $border-color;
    }

    &-component{
      padding:16px;
    }

    &-actions{
      @extend %item;
    }

    &-code{
      @extend %item;

      >pre{
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>
