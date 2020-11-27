<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>

    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="html" />
    </div>
    <div class="demo-actions">
      <div @click="hideCode" v-if="codeVisible" class="commonCode">
        <svg class="icon">
          <use xlink:href="#icon-up"></use>
        </svg>
        <span>隐藏代码</span>
      </div>
      <div @click="toggleCode" v-if="!codeVisible" class="commonCode">
        <svg class="icon">
          <use xlink:href="#icon-down"></use>
        </svg>
        <span>查看代码</span>
      </div>

      <!-- <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="toggleCode" v-else>查看代码</Button> -->
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { computed, ref } from "vue";
import "prismjs";

const Prism = (window as any).Prism;
export default {
  components: { Button },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const hideCode = () => (codeVisible.value = false);
    const toggleCode = () => (codeVisible.value = true);
    const codeVisible = ref(false);
    return { Prism, html, codeVisible, hideCode, toggleCode };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$color: #8a4aba;

%item {
  padding: 8px 16px;
}
.demo {
  border: 1px solid $border-color;
  margin: 32px 0;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    > .commonCode {
      height: 44px;
      margin-top: -1px;
      cursor: pointer;
      border-top: 1px dashed $border-color;
      position: relative;
      text-align: center;
      left: 0;
      color: $color;

      > svg {
        width: 16px;
        height: 44px;
        fill: #d3dce6;
        transition: 500ms;
        text-align: center;
      }
      > span {
        opacity: 0;
        position: absolute;
        font-size: 14px;
        line-height: 44px;
        transition: 500ms;
      }
    }
  }
  &-actions > .commonCode:hover {
    span {
      opacity: 1;
      transform: translateX(-30px);
    }
    > svg {
      fill: $color;
      transform: translateX(-40px);
    }
  }

  &-code {
    @extend %item;
    transition: all 3s;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>